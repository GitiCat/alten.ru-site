import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import { composeWithDevTools } from 'redux-devtools-extension'

import './public/styles/styles.scss';
import App from './app/app';

import configureStore from './app/store/index';
const store = createStore(configureStore, composeWithDevTools());

render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('renderer'));