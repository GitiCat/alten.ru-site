import React, { useContext, useEffect, useReducer, useState } from 'react'
import { Route } from 'react-router-dom'
import Loadables from './loadables'
import {
    SelectedProductContext,
    SelectedProductContextTypes
} from '../contexts/selected-product-context'
import { GlobalContext } from '../contexts/global-context'
import { GlobalContextTypes } from '../types/global-context-types'
import {
    initialState,
    productSelectedReducer
} from '../store/products-selected/reducer'
import { getAsyncData } from '../utils/async-get-data'
import { useReducerWithMiddleware } from '../redux-middleware/index'
import ChangeProductSelectedMiddleware from '../redux-middleware/change-product-selected-middleware'

const ProductsRoutes: React.FunctionComponent = () => {
    const globalContext: GlobalContextTypes = useContext(GlobalContext)
    const [categories, setCategories] = useState(null)
    const [state, dispatch] = useReducerWithMiddleware(
        productSelectedReducer,
        initialState,
        [ChangeProductSelectedMiddleware]
    )
    
    useEffect(() => {
        getAsyncData({api_v: 0, url: 'categories-product'})
            .then(response => setCategories(response.data))
    }, [])

    useEffect(() => {
        globalContext.productCategories = categories
    })

    const initialContextValues: SelectedProductContextTypes = {
        state: state,
        dispatch: dispatch
    }
    
    return (
        <SelectedProductContext.Provider value={initialContextValues}>
            <Route exact path='/products' component={Loadables.ProductsComponent} />
            {categories && 
                (categories as []).map((item, index) => {
                    const path: string = `/products/${item['id']}`
                    return (
                        <Route key={index} exact path={path} component={Loadables.ProductsSelected}/>
                    )
                })
            }
        </SelectedProductContext.Provider>
    )
}


export default React.memo(ProductsRoutes)