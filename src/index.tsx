import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import configureStore from './app/redux/store/index';

import './public/styles/styles.scss';
import App from './app/app';
import rootSaga from './app/redux/saga/index'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    configureStore,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('renderer'));