import React, { lazy } from 'react';
import {
    Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const HomeComponent : React.FunctionComponent = lazy(() => import('./components/pages/home/index'));

const FooterBlock : React.ExoticComponent = lazy(() => import('./components/blocks/footer/footer'));

const App : React.FunctionComponent<any> = props => {
    return (
        <React.Fragment>
            <Router history={history}>
                <Switch>
                    <Route exact path='/home' component={HomeComponent}/>
                    <Redirect from='/' to='/home'/>/
                </Switch>
                <FooterBlock/>
            </Router>
        </React.Fragment>
    )
}

export default App;