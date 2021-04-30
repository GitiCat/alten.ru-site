import React from 'react';
import {
    Router,
    Switch
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AppRoutes from './routes/index'
import SideMenuPanel from './components/blocks/sideMenu/panel';
import FooterBlock from './components/blocks/footer/footer'
import { MemodBlackoutBlock } from './components/blocks/blackout/blackout';

const history = createBrowserHistory();

const App: React.FunctionComponent = () => {
    return (
        <React.Fragment>
            <Router history={history}>
                <MemodBlackoutBlock />
                <SideMenuPanel />
                <Switch>
                    <AppRoutes/>
                </Switch>
                <FooterBlock />
            </Router>
        </React.Fragment>
    )
}

export default App;