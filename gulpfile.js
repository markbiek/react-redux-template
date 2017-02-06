const webpack = require('webpack-stream');
const gulp = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const bs = require('browser-sync').create();

const webpackConfig = require('./webpack.config.js');

var paths = {
    scripts: ['res/assets/js/**/*.js'],
    less: ['res/assets/less/**/*.less'],
    out: 'public/'
};

gulp.task('less', () => {
    return gulp.src(paths.less)
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(concat('global.min.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.out + 'css'));
});

gulp.task('styles', ['less']);

gulp.task('webpack', (done) => {
    gulp.src('res/assets/js/index.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(paths.out + '/js'));
});

gulp.task('watch', ['dev'], () => {
    gulp.watch(paths.scripts, ['webpack']);
    gulp.watch(paths.less, ['styles']);

    gulp.watch(paths.out + 'css/*.css').on('change', bs.reload);
    gulp.watch(paths.out + 'js/*.js').on('change', bs.reload);
});

gulp.task('dev', () => {
    bs.init({
        server: {
            baseDir: './'
        }
    });
});

gulp.task('default', ['styles', 'webpack']);
