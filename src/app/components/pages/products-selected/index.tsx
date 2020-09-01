import React, { useReducer, useEffect, useContext } from 'react';
import { getAsyncData } from '../../../utils/async-get-data'
import { asyncDataReducer, initialState } from '../../../utils/async-data-states/reducer'
import { ERROR, FETCHED } from '../../../utils/async-data-states/types'
import ProductContext from '../../../context/product-context'
import Header from '../../blocks/header/header'
import ProductPreviewList from './preview'

const ProductsSelected: React.FunctionComponent = () => {
    const [state, setState] = useReducer(asyncDataReducer, initialState)
    const context = useContext(ProductContext)
    
    useEffect(() => {
        getAsyncData({
            api_v: 0,
            url: 'products',
            params: {
                'category': context['category_id']
            }
        })
        .then(result => setState({ type: FETCHED, payload: {data: result} }))
        .catch(error => setState({ type: ERROR, payload: {errorString: error} }))
    }, [])
    
    return (
        <div className="content">
            {!state.loading &&
                <React.Fragment>
                    <Header title='Продукция' subtitle='Продукция нашего предприятия'/>
                    <div className="article">
                        <div className="product-display">
                            <ProductPreviewList items={state.data}/>
                        </div>
                    </div>
                </React.Fragment>
            }
        </div>
    )
}

export default ProductsSelected;