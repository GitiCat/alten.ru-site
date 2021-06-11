import React from 'react'
import Loadable from 'react-loadable'
import SuspensLoader from '../components/blocks/suspens-loader/suspens-loader'

const HomeComponent = Loadable({
    loader: () => import('../components/pages/home/index'),
    loading: () => <SuspensLoader/>
})

const HistoryComponent = Loadable({
    loader: () => import('../components/pages/history/index'),
    loading: () => <SuspensLoader/>
})

const ActivityComponent = Loadable({
    loader: () => import('../components/pages/activity/index'),
    loading: () => <SuspensLoader/>
})

const ProductsComponent = Loadable({
    loader: () => import('../components/pages/products/index'),
    loading: () => <SuspensLoader/>
})

const ProductsSelected = Loadable({
    loader: () => import('../components/pages/products-selected/index'),
    loading: () => <SuspensLoader/>
})

const CompanyComponent = Loadable({
    loader: () => import('../components/pages/company/index'),
    loading: () => <SuspensLoader/>
})

const LeadershipsComponent = Loadable({
    loader: () => import('../components/pages/leaderships/index'),
    loading: () => <SuspensLoader/>
})

const VacanciesComponent = Loadable({
    loader: () => import('../components/pages/vacancies/index'),
    loading: () => <SuspensLoader/>
})

const LicencesComponent = Loadable({
    loader: () => import('../components/pages/licences/index'),
    loading: () => <SuspensLoader/>
})

const DocumentsComponent = Loadable({
    loader: () => import('../components/pages/documents/index'),
    loading: () => <SuspensLoader/>
})

const GalleryComponent = Loadable({
    loader: () => import('../components/pages/gallery/index'),
    loading: () => <SuspensLoader/>
})

const NewsComponent = Loadable({
    loader: () => import('../components/pages/news/index'),
    loading: () => <SuspensLoader/>
})

const NewsSelectedComponent = Loadable({
    loader: () => import('../components/pages/news/selected'),
    loading: () => <SuspensLoader/>
})

export default {
    HomeComponent,
    HistoryComponent,
    ActivityComponent,
    ProductsComponent,
    ProductsSelected,
    CompanyComponent,
    LeadershipsComponent,
    VacanciesComponent,
    LicencesComponent,
    DocumentsComponent,
    GalleryComponent,
    NewsComponent,
    NewsSelectedComponent
}