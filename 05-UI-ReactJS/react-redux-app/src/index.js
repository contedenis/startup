import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/';
import './css/normalize.css';
import './css/bootstrap.css';
import './css/main.css';
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
