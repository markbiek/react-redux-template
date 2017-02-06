# react-redux-template

A simple boilerplate project to help get an initial React/Redux app up and running.

We use Webpack for the ES6 compilation and Gulp for everything else. I'm not a big fan of doing CSS in Webpack modules.

## Build
Gulp + Webpack (v1) for script & stylesheet compilation.

Run `gulp watch` for hot reloading with Browser-Sync.

## Directory structure

```
gulpfile.js                     Main gulpfile
webpack.config.js               Webpack configuration
index.html                      React app binds to #app element here. Any HTML markup is here.
res/assets/less                 Any LESS files here are bundled and compiled into public/css/global.min.css (includes sourcemaps).
res/assets/js                   React Javascript files. Assets are compiled into public/js/bundle.js (includes sourcemaps).
    - index.js                  Primary entry point.
    - store.js                  Redux store. Add new reducers here. There is a single testReducer in use. Assume that all state objects are ImmutableJS objects.
    - components                Put components here. Recommended format is components/ComponentName/index.js
```
