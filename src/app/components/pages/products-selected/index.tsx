import React, { useContext, useEffect, useReducer } from 'react'
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
    SELECTED_PRODUCT_ITEM_ID
} from '../../../consts/product-selected-consts'
import { SET_PRODUCT } from '../../../store/products-selected/types'
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
import { GlobalContextTypes } from '../../../types/global-context-types'
import { GlobalContext } from '../../../contexts/global-context'

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
    if (props.location.state !== undefined && props.location.state !== null)
        return props.location.state['category_id']

    if (context.state.selectedCategoryId !== 0)
        return Number(context.state.selectedCategoryId)

    if (Number(sessionStorage.getItem(SELECTED_PRODUCT_CATEGORY_ID)) !== 0)
        return Number(sessionStorage.getItem(SELECTED_PRODUCT_CATEGORY_ID))

    const path = props.location.pathname
    return Number(path.slice(path.lastIndexOf('/') + 1, path.length))
}

const getProductId = (): number => {
    return Number(sessionStorage.getItem(SELECTED_PRODUCT_ITEM_ID) || 0)
}

/**
 * Render dom component for current selected products category
 * @param props route component props
 * @returns render dom component
 */
const ProductsSelected: React.FunctionComponent<RouteComponentProps> = (props) => {
    const globalContext: GlobalContextTypes = useContext(GlobalContext)
    const context: SelectedProductContextTypes = useContext(SelectedProductContext)
    const [state, dispatch] = useReducer(asyncDataReducer, initialState)
    const selectedCategoryId: number = getCategoryId(props, context)
    const selectedProductId: number = getProductId()

    useEffect(() => {
        getAsyncData({
            api_v: 0,
            url: 'products',
            params: {
                'category': selectedCategoryId
            }
        })
        .then(result => {
            context.dispatch({ type: SET_PRODUCT, payload: { 
                selectedCategoryId: selectedCategoryId,
                selectedItemId: selectedProductId
            }})
            dispatch({ type: FETCHED, payload: { data: result.data } })
        })
        .catch(error => dispatch({ type: ERROR, payload: { errorString: error } }))
    }, [])
    
    //  current selected product id
    const id: number = context.state.selectedItemId
    //  Current selected product values
    const item: IProductSelectedContentTypes = state.data !== null && {
        title: state.data[id].title,
        descriptor: state.data[id].descriptor,
        feature: state.data[id].feature,
        image_url: state.data[id].main_image,
        files: state.data[id].file
    }

    return (
        <div className="content">
            {!state.loading ?
                <React.Fragment>
                    <Header title='Продукция' subtitle={
                        (globalContext.productCategories as []).filter(value => value['id'] === selectedCategoryId)[0]['name']
                    } />
                    <article className='text'>
                        <ProductSelectedSlider items={state.data}/>
                        <ProductSelectedContent title={item.title}
                            descriptor={item.descriptor}
                            feature={item.feature}
                            image_url={item.image_url}
                            files={item.files}/>
                    </article>
                </React.Fragment>
                : <DataPreloader />
            }
        </div>
    )
}

export default ProductsSelected;