import React, { useEffect, useReducer } from 'react'
import Header from '../../blocks/header/header'
import { getAsyncData } from '../../../utils/async-get-data'
import { asyncDataReducer ,initialState } from '../../../utils/async-data-states/reducer'
import { FETCHED, ERROR } from '../../../utils/async-data-states/types'

const ProductsComponent: React.FunctionComponent = () => {
    const [state, dispatch] = useReducer(asyncDataReducer, initialState)

    useEffect(() => {
        getAsyncData({
            api_v: 0,
            url: 'products',
            params: {}
        })
        .then(result => dispatch({ type: FETCHED, payload: { data: result }}))
        .catch(error => dispatch({ type: ERROR, payload: { errorString: error }}))
    }, [])
    
    return (
        <div>
            {!state.loading &&
                <React.Fragment>
                    <Header title='Продукция' subtitle='Продукция нашего предприятия'/>
                    <div className="article">
                        
                    </div>
                </React.Fragment>
            }
        </div>
    )
}

export default ProductsComponent;