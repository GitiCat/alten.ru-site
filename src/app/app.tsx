import React, { lazy } from 'react';
import {
    Router,
    Route,
    Switch
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import SideMenuPanel from './components/blocks/sideMenu/panel';
import { MemodBlackoutBlock } from './components/blocks/blackout/blackout';
import { ProductProvider, ProductContextDefaultValues } from './context/product-context'

const history = createBrowserHistory();

const HomeComponent : React.FunctionComponent           = lazy(() => import('./components/pages/home/index'));
const HistoryComponent: React.FunctionComponent         = lazy(() => import('./components/pages/history/index'));
const ActivityComponent: React.FunctionComponent        = lazy(() => import('./components/pages/activity/index'));
const ProductsComponent: React.FunctionComponent        = lazy(() => import('./components/pages/products/index'));
const ProductsSelected: React.FunctionComponent         = lazy(() => import('./components/pages/products-selected/index'));
const CompanyComponent: React.FunctionComponent         = lazy(() => import('./components/pages/company/index'));
const LeadershipsComponent: React.FunctionComponent     = lazy(() => import('./components/pages/leaderships/index'));
const PublicationsComponent: React.FunctionComponent    = lazy(() => import('./components/pages/publications/index'));
const LicencesComponent: React.FunctionComponent        = lazy(() => import('./components/pages/licences/index'));
const DocumentsComponent: React.FunctionComponent       = lazy(() => import('./components/pages/documents/index'));
const GalleryComponent: React.FunctionComponent         = lazy(() => import('./components/pages/gallery/index'));
const NewsComponent: React.FunctionComponent            = lazy(() => import('./components/pages/news/index'));
const NewsSelectedConponent: React.FunctionComponent    = lazy(() => import('./components/pages/news/selected'));
const FooterBlock : React.ExoticComponent               = lazy(() => import('./components/blocks/footer/footer'));

const App : React.FunctionComponent = () => {
    return (
        <React.Fragment>
            <Router history={history}>
                <MemodBlackoutBlock/>
                <SideMenuPanel/>
                <Switch>
                    <Route path='/' exact component={HomeComponent}/>
                    <Route path='/history' component={HistoryComponent}/>
                    <Route path='/activity' component={ActivityComponent}/>
                    <ProductProvider value={ProductContextDefaultValues}>
                        <Route exact path='/products' component={ProductsComponent}/>
                        <Route path='/products/rechargeable-batteries' component={ProductsSelected}/>
                        <Route path='/products/primary-current-sources' component={ProductsSelected}/>
                        <Route path='/products/zru' component={ProductsSelected}/>
                    </ProductProvider>
                    <Route exact path='/company' component={CompanyComponent}/>
                    <Route path='/company/leaderships' component={LeadershipsComponent}/>
                    <Route path='/company/publications' component={PublicationsComponent}/>
                    <Route path='/company/licences' component={LicencesComponent}/>
                    <Route path='/company/documents' component={DocumentsComponent}/>
                    <Route path='/company/gallery' component={GalleryComponent}/>
                    <Route exact path='/news' component={NewsComponent}/>
                    <Route exact path='/news/:news_id' component={NewsSelectedConponent}/>
                </Switch>
                <FooterBlock/>
            </Router>
        </React.Fragment>
    )
}

export default App;