import React, { useReducer, useEffect } from 'react';
import parse from 'html-react-parser';
import { getAsyncData } from '../../../utils/async-get-data';
import { asyncDataReducer, initialState } from '../../../utils/async-data-states/reducer'
import { ERROR, FETCHED } from '../../../utils/async-data-states/types'
import Header from '../../blocks/header/header';
import DataPreloader from '../../blocks/data-preloader/index'

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
        .then(result => dispatch({ type: FETCHED, payload: { data: result.data } }))
        .catch(error => dispatch({ type: ERROR, payload: { errorString: error } }))
    }, [])

    useEffect(() => {
        document.title = 'Деястельность'
    })
    
    return (
        <div className="content">
            {!state.loading ?
                <React.Fragment>
                    <Header title={state.data['category']['title']} subtitle={state.data['category']['descriptor']}/>
                    <article className="text">
                        {
                            state.data['data'].map((item) => {
                                return (
                                    parse(item['text'])
                                )
                            })
                        }
                    </article>
                </React.Fragment>
                : <DataPreloader/>
            }
        </div>
    )
}

export default ActivityComponent;