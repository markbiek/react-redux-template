import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import TestComponent from './components/TestComponent';

class App extends React.Component {
    render () {
        console.log('a fake change');
        return (
            <Provider store={store}>
                <TestComponent />
            </Provider>
        );
    }
}

let app = document.getElementById('app');

if (app) {
    render(<App/>, app);
}
