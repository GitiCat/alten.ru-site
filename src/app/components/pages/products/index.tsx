import React, { useEffect, useReducer } from 'react'
import Header from '../../blocks/header/header'
import { getAsyncData } from '../../../utils/async-get-data'
import { asyncDataReducer ,initialState } from '../../../utils/async-data-states/reducer'
import { FETCHED, ERROR } from '../../../utils/async-data-states/types'
import CategoryProductBlock from './category'

const ProductsComponent: React.FunctionComponent = () => {
    const [state, dispatch] = useReducer(asyncDataReducer, initialState)

    useEffect(() => {
        getAsyncData({
            api_v: 0,
            url: 'products-by-category',
            params: {}
        })
        .then(result => dispatch({ type: FETCHED, payload: { data: result.data }}))
        .catch(error => dispatch({ type: ERROR, payload: { errorString: error }}))
    }, [])

    useEffect(() => {
        document.title = 'Продукция'
    })
    
    return (
        <div className="content">
            {!state.loading &&
                <React.Fragment>
                    <Header title='Продукция' subtitle='Категории и продукция нашего предприятия'/>
                    <article className="text">
                        {
                            (state.data as []).map((item: {}, index: number) => {
                                return (
                                    <CategoryProductBlock key={index}
                                        id={item['id']}
                                        title={item['title']}
                                        descriptor={item['descriptor']}
                                        items={item['items']}
                                    />
                                )
                            })
                        }
                    </article>
                </React.Fragment>
            }
        </div>
    )
}

export default ProductsComponent;