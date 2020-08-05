import React, { useReducer, useEffect } from 'react';
import { getAsyncData } from '../../../utils/async-get-data'
import { asyncDataReducer, initialState } from '../../../utils/async-data-states/reducer'
import { ERROR, FETCHED } from '../../../utils/async-data-states/types'
import Header from '../../blocks/header/header'
import DocumentsWrapperList from './wrapperList'

const DocumentsComponent: React.FunctionComponent = () => {
    const [state, dispatch] = useReducer(asyncDataReducer, initialState)

    useEffect(() => {
        getAsyncData({
            api_v: 0,
            url: 'documents'
        })
        .then(result => dispatch({ type: FETCHED, payload: { data: result } }))
        .catch(error => dispatch({ type: ERROR, payload: { errorString: error}}))
    }, [])
    
    return (
        <div className='content'>
            {!state.loading && 
                <React.Fragment>
                    <Header title='Документы' subtitle='Общедоступные документы предприятия'/>
                    <div className="article">
                        <div className="wrapper">
                            {
                                state.data.map((item: {}, index: number) => {
                                    return (
                                        <DocumentsWrapperList key={index}
                                            title = {item['title']}
                                            descriptor = {item['descriptor']}
                                            items = {item['items']}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </React.Fragment>
            }
        </div>
    )
}

export default DocumentsComponent;