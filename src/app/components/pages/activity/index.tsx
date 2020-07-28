import React, { useReducer, useEffect } from 'react';
import { getAsyncData } from '../../../utils/async-get-data';
import { asyncDataReducer, initialState } from '../../../utils/async-data-states/reducer'
import { ERROR, FETCHED } from '../../../utils/async-data-states/types'
import Header from '../../blocks/header/header';

const ActivityComponent: React.FunctionComponent = () => {
    const [state, dispatch] = useReducer(asyncDataReducer, initialState)

    useEffect(() => {
        getAsyncData({
            api_v: 0,
            url: 'articles',
            params: {
                'category': 'activity'
            }
        })
        .then(result => dispatch({ type: FETCHED, payload: { data: result } }))
        .catch(error => dispatch({ type: ERROR, payload: { errorString: error } }))
    }, [])
    
    return (
        <div className="content">
            {!state.loading && 
                <React.Fragment>
                    <Header title={state.data['category']['title']} subtitle={state.data['category']['descriptor']}/>
                    <div className="article">
                        <div className="text">
                            {
                                state.data  ['data'].map((item: {}, index: number) => {
                                    return (
                                        <div key={index} className="base" dangerouslySetInnerHTML={{__html: item['text']}}/>
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

export default ActivityComponent;