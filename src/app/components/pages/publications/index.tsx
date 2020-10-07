import React, { useEffect, useReducer } from 'react'
import { getAsyncData } from '../../../utils/async-get-data'
import { asyncDataReducer, initialState } from '../../../utils/async-data-states/reducer'
import { LOADING, ERROR } from '../../../utils/async-data-states/types'
import Header from '../../blocks/header/header'
import DataPreloader from '../../blocks/data-preloader/index'

const PublicationsComponent: React.FunctionComponent = () => {
    const [state, dispatch] = useReducer(asyncDataReducer, initialState)

    useEffect(() => {
        getAsyncData({
            api_v: 0,
            url: "publications",
            params: null
        })
            .then(result => dispatch({ type: LOADING, payload: { data: result.data } }))
            .catch(error => dispatch({ type: ERROR, payload: { errorString: error } }))
    }, [])

    useEffect(() => {
        document.title = 'Публикации'
    })
    
    return (
        <div className='content'>
            {state.loading ?
                <React.Fragment>
                    <Header title='Публикации' subtitle='Статьи и публикации предприятия' />
                </React.Fragment>
                : <DataPreloader/>
            }
        </div>
    )
}

export default PublicationsComponent;