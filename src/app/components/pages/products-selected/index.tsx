import React, { useReducer, useEffect, useRef, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { getAsyncData } from '../../../utils/async-get-data'
import { asyncDataReducer, initialState } from '../../../utils/async-data-states/reducer'
import { ERROR, FETCHED } from '../../../utils/async-data-states/types'
import Header from '../../blocks/header/header'
import ProductMobilePreviewList from './preview-mobile/index'
import ProductPreviewList from './preview'
import ProductDisplay from './display'
import { setWindowResizeEvent } from './utils/resizing'
import { ProductProvider } from './utils/context'
import DataPreloader from '../../blocks/data-preloader/index'

const getSearchParams = (search: URLSearchParams, data_length: number) => {
    const categoryIdFromSearch: number = Number(search.get('category')),
        productIdFromSearch: number = Number(search.get('product'))

    let categoryId: number = categoryIdFromSearch,
        productId: number = productIdFromSearch

    return { categoryId, productId }
}

const ProductsSelected: React.FunctionComponent<RouteComponentProps> = ({ location, history }) => {
    const [state, setState] = useReducer(asyncDataReducer, initialState)
    const [isMobile, setPreviewType] = useState(false)
    const prevRef = useRef({})
    const search = new URLSearchParams(location.search)
    const params = getSearchParams(search, (state?.data as [])?.length)
    const [currentId, setCurrentId] = useState(params.productId)

    const API = (id: number) => {
        getAsyncData({
            api_v: 0,
            url: 'products',
            params: {
                'category': id
            }
        })
            .then(result => setState({ type: FETCHED, payload: { data: result.data } }))
            .catch(error => setState({ type: ERROR, payload: { errorString: error } }))
    }

    useEffect(() => {
        setWindowResizeEvent(isMobile, setPreviewType)
        API(params.categoryId)
        prevRef.current = params.categoryId
    }, [])

    useEffect(() => {
        if (prevRef.current != params.categoryId) {
            API(params.categoryId)
            prevRef.current = params.categoryId
        }

        document.title = 'Продукция'
    })

    let currentItem: {} = state.data == undefined ? {} : state.data[currentId]

    return (
        <div className="content">
            {!state.loading ?
                <React.Fragment>
                    <Header title='Продукция' subtitle='Продукция нашего предприятия' />
                    <section className="container">
                        <div className="product-display flex">
                            <ProductProvider value={currentId}>
                                {!isMobile
                                    ? <ProductPreviewList items={state.data} changeState={setCurrentId} history={history} />
                                    : <ProductMobilePreviewList items={state.data} changeState={setCurrentId} history={history} />
                                }
                            </ProductProvider>
                            <ProductDisplay
                                title={currentItem['title']}
                                descriptor={currentItem['descriptor']}
                                features={currentItem['feature']}
                                image_url={currentItem['main_image'] == null ? null : currentItem['main_image']['image']}
                                files={currentItem['file']}
                            />
                        </div>
                    </section>
                </React.Fragment>
                : <DataPreloader/>
            }
        </div>
    )
}

export default ProductsSelected;