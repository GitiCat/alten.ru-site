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
import {
    SelectedProductTypes,
    SET_PRODUCT,
    SET_PRODUCT_CATEGORY_ID,
    UPDATE_PRODUCT,
    UPDATE_PRODUCT_CATEGORY_ID,
    UPDATE_PRODUCT_ITEM_ID
} from '../../../redux/store/products-selected/types'
import {
    AsyncDataStatesTypes,
    LOADING
} from '../../../utils/async-data-states/types'
import { IProductSelectedContentTypes } from '../../../types/selected-product-types'
import { IProductCategoryTypes, IProductTypes } from '../../../types/api-types'
import { GlobalContextTypes } from '../../../types/global-context-types'
import { GlobalContext } from '../../../contexts/global-context'
import { useDispatch, useSelector, useStore } from 'react-redux'

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
    const dispatch = useDispatch()
    const asyncDataSelector: AsyncDataStatesTypes = useSelector(state => state['asyncDataReducer'])
    const selectedProduct: SelectedProductTypes = useSelector(state => state['productSelected'])
    const productContext = useContext<SelectedProductContextTypes>(SelectedProductContext)
    const globalContext = useContext<GlobalContextTypes>(GlobalContext)

    useEffect(() => {
        const categoryId: number = getCategoryId(props, null)
        dispatch({
            type: UPDATE_PRODUCT, payload: {
                categoryId: categoryId,
                productId: 0
            }
        })
        dispatch({ type: LOADING, categoryId: categoryId })
    }, [])

    const currentCategory: IProductCategoryTypes
        = (globalContext.productCategories as [])
            .filter((item: IProductCategoryTypes) => item.id === selectedProduct.selectedCategoryId)[0]

    let data: IProductTypes = null
    if(asyncDataSelector.data !== null) {
        data = asyncDataSelector.data[selectedProduct.selectedItemId]
    }

    return (
        <div className="content selected-product-content">
            {!asyncDataSelector.loading ?
                <React.Fragment>
                    <Header title='Продукция' subtitle='' />
                    {currentCategory !== null &&
                        <article className='text'>
                            <div className="title">
                                <React.Fragment>
                                    <h1>{currentCategory.title}</h1>
                                    <div className="descriptor">
                                        {currentCategory.descriptor !== null &&
                                            parse(currentCategory.descriptor, { trim: true })
                                        }
                                        <div className="sub">
                                            {currentCategory.sub_descriptor !== null &&
                                                parse(currentCategory.sub_descriptor, { trim: true })
                                            }
                                        </div>
                                    </div>
                                </React.Fragment>
                            </div>
                            <ProductSelectedSlider items={asyncDataSelector.data}/>
                        </article>
                    }
                </React.Fragment>
                : <DataPreloader />
            }
        </div>
    )
}

export default React.memo(ProductsSelected)