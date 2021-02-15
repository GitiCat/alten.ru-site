import React from 'react';
import {
    Router,
    Route,
    Switch
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Loadable from 'react-loadable'
import SideMenuPanel from './components/blocks/sideMenu/panel';
import FooterBlock from './components/blocks/footer/footer'
import { MemodBlackoutBlock } from './components/blocks/blackout/blackout';
import SuspensLoader from './components/blocks/suspens-loader/suspens-loader'

const HomeComponent = Loadable({
    loader: () => import('./components/pages/home/index'),
    loading: () => <SuspensLoader/>
})

const HistoryComponent = Loadable({
    loader: () => import('./components/pages/history/index'),
    loading: () => <SuspensLoader/>
})

const ActivityComponent = Loadable({
    loader: () => import('./components/pages/activity/index'),
    loading: () => <SuspensLoader/>
})

const ProductsComponent = Loadable({
    loader: () => import('./components/pages/products/index'),
    loading: () => <SuspensLoader/>
})

const ProductsSelected = Loadable({
    loader: () => import('./components/pages/products-selected/index'),
    loading: () => <SuspensLoader/>
})

const CompanyComponent = Loadable({
    loader: () => import('./components/pages/company/index'),
    loading: () => <SuspensLoader/>
})

const LeadershipsComponent = Loadable({
    loader: () => import('./components/pages/leaderships/index'),
    loading: () => <SuspensLoader/>
})

const LeadershipSelectedComponent = Loadable({
    loader: () => import('./components/pages/leaderships/selected'),
    loading: () => <SuspensLoader/>
})

const PublicationsComponent = Loadable({
    loader: () => import('./components/pages/publications/index'),
    loading: () => <SuspensLoader/>
})

const LicencesComponent = Loadable({
    loader: () => import('./components/pages/licences/index'),
    loading: () => <SuspensLoader/>
})

const DocumentsComponent = Loadable({
    loader: () => import('./components/pages/documents/index'),
    loading: () => <SuspensLoader/>
})

const GalleryComponent = Loadable({
    loader: () => import('./components/pages/gallery/index'),
    loading: () => <SuspensLoader/>
})

const NewsComponent = Loadable({
    loader: () => import('./components/pages/news/index'),
    loading: () => <SuspensLoader/>
})

const NewsSelectedConponent = Loadable({
    loader: () => import('./components/pages/news/selected'),
    loading: () => <SuspensLoader/>
})

const history = createBrowserHistory();

const App: React.FunctionComponent = () => {
    return (
        <React.Fragment>
            <Router history={history}>
                <MemodBlackoutBlock />
                <SideMenuPanel />
                <Switch>
                    <Route exact path='/' component={HomeComponent} />
                    <Route exact path='/history' component={HistoryComponent} />
                    <Route exact path='/history' component={HistoryComponent} />
                    <Route exact path='/activity' component={ActivityComponent} />
                    <Route exact path='/products' component={ProductsComponent} />
                    <Route exact path='/products/rechargeable-batteries' component={ProductsSelected} />
                    <Route exact path='/products/primary-current-sources' component={ProductsSelected} />
                    <Route exact path='/products/zru' component={ProductsSelected} />
                    <Route exact path='/company' component={CompanyComponent} />
                    <Route exact path='/company/leaderships' component={LeadershipsComponent} />
                    <Route path='/company/leaderships/:id' component={LeadershipSelectedComponent}/>
                    <Route exact path='/company/publications' component={PublicationsComponent} />
                    <Route exact path='/company/licences' component={LicencesComponent} />
                    <Route exact path='/company/documents' component={DocumentsComponent} />
                    <Route exact path='/company/gallery' component={GalleryComponent} />
                    <Route exact path='/news' component={NewsComponent} />
                    <Route path='/news/:news_id' component={NewsSelectedConponent} />
                </Switch>
                <FooterBlock />
            </Router>
        </React.Fragment>
    )
}

export default App;