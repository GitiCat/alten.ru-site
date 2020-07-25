import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import './public/styles/styles.scss';
import App from './app/app';

import configureStore from './app/store/index';
const store = createStore(configureStore);

render((
    <Suspense fallback='loader...'>
        <Provider store={store}>
            <App/>
        </Provider>
    </Suspense>
), document.getElementById('renderer'));