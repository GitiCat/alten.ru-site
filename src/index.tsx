import React, { Suspense } from 'react';
import { render } from 'react-dom';

import './public/styles/styles.scss';
import App from './app/app';

render((
    <Suspense fallback='loader...'>
        <App/>
    </Suspense>
), document.getElementById('renderer'));