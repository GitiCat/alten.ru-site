import React, { useContext, useEffect, useReducer, useState } from 'react'
import parse from 'html-react-parser'
import Header from '../../blocks/header/header'
import DataPreloader from '../../blocks/data-preloader/index'
import ProductSelectedSlider from './slider/index'
import ProductSelectedContent from './content/index'
import { RouteComponentProps } from 'react-router-dom'
import {
    SelectedProductContext,
    SelectedProductContextTypes
} from '../../../contexts/selected-product-context'
import {
    SELECTED_PRODUCT_CATEGORY_ID,
} from '../../../consts/product-selected-consts'
import { SelectedProductTypes, SET_PRODUCT_CATEGORY_ID } from '../../../redux/store/products-selected/types'
import {
    asyncDataReducer,
    initialState
} from '../../../utils/async-data-states/reducer'
import {
    ERROR,
    FETCHED,
} from '../../../utils/async-data-states/types'
import { getAsyncData } from '../../../utils/async-get-data'
import { IProductSelectedContentTypes } from '../../../types/selected-product-types'
import { IProductCategoryTypes } from '../../../types/api-types'
import { GlobalContextTypes } from '../../../types/global-context-types'
import { GlobalContext } from '../../../contexts/global-context'
import { useSelector, useStore } from 'react-redux'
import { fetchCategoryProductSaga } from '../../../redux/saga/selected-product-saga'

/**
 * Get category id for async get data method call from the server
 * @param props route component props
 * @param context product pages context
 * @returns category id for request to server
 */
const getCategoryId = (
    props: RouteComponentProps,
    context: SelectedProductContextTypes,
): number => {
    if (props.location.state !== undefined)
        return props.location.state['category_id']

    if (context.state.selectedCategoryId !== 0)
        return Number(context.state.selectedCategoryId)

    if (Number(sessionStorage.getItem(SELECTED_PRODUCT_CATEGORY_ID)) !== 0)
        return Number(sessionStorage.getItem(SELECTED_PRODUCT_CATEGORY_ID))

    const path = props.location.pathname
    return Number(path.slice(path.lastIndexOf('/') + 1, path.length))
}

/**
 * Render dom component for current selected products category
 * @param props route component props
 * @returns render dom component
 */
const ProductsSelected: React.FunctionComponent<RouteComponentProps> = (props) => {    
    const generator = fetchCategoryProductSaga()
    console.log(generator.next());
    
    return (
        <div className="content selected-product-content">
                <React.Fragment>
                    <Header title='Продукция' subtitle=''/>
                    <article className='text'>
                        <div className="title">
                                <React.Fragment>
                                    <h1>
                                    </h1>
                                    <div className="descriptor">
                                        <div className="sub">
                                        </div>
                                    </div>
                                </React.Fragment>
                        </div>
                    </article>
                </React.Fragment>
        </div>
    )
}

export default React.memo(ProductsSelected)