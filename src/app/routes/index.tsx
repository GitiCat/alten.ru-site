import React from 'react'
import { Route } from 'react-router-dom'
import Loadables from './loadables'
import ProductsRoutes from './products-routes'

const AppRoutes: React.FunctionComponent = () => {
    return (
        <React.Fragment>
            <Route exact path='/' component={Loadables.HomeComponent} />
            <Route exact path='/history' component={Loadables.HistoryComponent} />
            <Route exact path='/activity' component={Loadables.ActivityComponent} />
            <ProductsRoutes />
            <Route exact path='/company' component={Loadables.CompanyComponent} />
            <Route exact path='/company/leaderships' component={Loadables.LeadershipsComponent} />
            <Route exact path='/company/publications' component={Loadables.PublicationsComponent} />
            <Route exact path='/company/licences' component={Loadables.LicencesComponent} />
            <Route exact path='/company/documents' component={Loadables.DocumentsComponent} />
            <Route exact path='/company/gallery' component={Loadables.GalleryComponent} />
            <Route exact path='/news' component={Loadables.NewsComponent} />
            <Route path='/news/:news_id' component={Loadables.NewsSelectedComponent} />
        </React.Fragment>
    )
}

export default React.memo(AppRoutes)