import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'

import './public/styles/styles.scss';
import App from './app/app';

import configureStore from './app/store/index';
const store = createStore(configureStore);

render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('renderer'));