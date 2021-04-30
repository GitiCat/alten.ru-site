import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import Preloader from '../components/blocks/data-preloader/index'
import Loadables from './loadables'
import ProductsRoutes from './products-routes'
import { GlobalContext, initialGlobalContext } from '../contexts/global-context'
import { GlobalContextTypes } from '../types/global-context-types'
import { initialGlobalStateApi } from '../utils/api/index'

const AppRoutes: React.FunctionComponent = () => {
    const [globalState, setGlobalState] = useState<GlobalContextTypes>(initialGlobalContext)

    useEffect(() => {
        initialGlobalStateApi().then(result => {
            result.isInitialized = true
            setGlobalState(result)
        })
    }, [])

    return (
        <GlobalContext.Provider value={globalState}>
            {
                globalState.isInitialized ?
                    <React.Fragment>
                        <Route exact path='/' component={Loadables.HomeComponent} />
                        <Route exact path='/history' component={Loadables.HistoryComponent} />
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
                : <Preloader />

            }
        </GlobalContext.Provider>
    )
}

export default React.memo(AppRoutes)