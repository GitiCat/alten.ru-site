import React, { useEffect, useReducer } from 'react'
import { Helmet } from 'react-helmet'
import { getAsyncData } from '../../../utils/async-get-data'
import { asyncDataReducer, initialState } from '../../../utils/async-data-states/reducer'
import { LOADING, ERROR } from '../../../utils/async-data-states/types'
import Header from '../../blocks/header/header'

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
    
    return (
        <div className='content'>
            <Helmet>
                <title>Публикации</title>
            </Helmet>
            {!state.loading ?
                <React.Fragment>
                    <Header title='Публикации' subtitle='Статьи и публикации предприятия' />
                </React.Fragment>
                : <div className="loading">loading...</div>
            }
        </div>
    )
}

export default PublicationsComponent;