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
import { useReducerWithMiddleware } from '../redux-middleware/index'
import ChangeProductSelectedMiddleware from '../redux-middleware/change-product-selected-middleware'
import { IProductCategoryTypes } from '../types/api-types'

const ProductsRoutes: React.FunctionComponent = () => {
    const globalContext: GlobalContextTypes = useContext(GlobalContext)
    const [state, dispatch] = useReducerWithMiddleware(
        productSelectedReducer,
        initialState,
        [ChangeProductSelectedMiddleware]
    )

    const initialContextValues: SelectedProductContextTypes = {
        state: state,
        dispatch: dispatch
    }
    
    return (
        <SelectedProductContext.Provider value={initialContextValues}>
            <Route exact path='/products' component={Loadables.ProductsComponent} />
            {(globalContext.productCategories as []).length > 0 && 
                (globalContext.productCategories as []).map((item: IProductCategoryTypes, index: number) => {
                    const path: string = `/products/${item.id}`
                    return (
                        <Route key={index} exact path={path} component={Loadables.ProductsSelected}/>
                    )
                })
            }
        </SelectedProductContext.Provider>
    )
}


export default React.memo(ProductsRoutes)