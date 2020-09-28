import React, { useEffect, useReducer } from 'react'
import { Helmet } from 'react-helmet'
import { getAsyncData } from '../../../utils/async-get-data'
import { asyncDataReducer, initialState } from '../../../utils/async-data-states/reducer'
import { ERROR, LOADING } from '../../../utils/async-data-states/types'
import Header from '../../blocks/header/header'

const GalleryComponent: React.FunctionComponent = () => {
    const [state, dispatch] = useReducer(asyncDataReducer, initialState)

    useEffect(() => {
        getAsyncData({
            api_v: 0,
            url: 'gallery',
            params: null
        })
        .then(result => dispatch({type: LOADING, payload: {data: result.data}}))
        .catch(error => dispatch({type: ERROR, payload: {errorString: error}}))
    }, [])
    
    return (
        <div className='content'>
            <Helmet>
                <title>Галерея</title>
            </Helmet>
            {state.loading ?
                <React.Fragment>
                    <Header title='Галерея' subtitle='Фотоальбомы предприяти'/>
                    <article>

                    </article>
                </React.Fragment>
                : <div className="loading">loading...</div>
            }
        </div>
    )
}

export default GalleryComponent;