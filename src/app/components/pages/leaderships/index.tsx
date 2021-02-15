import React, { useEffect, useReducer } from 'react'
import cn from 'classnames'
import { getAsyncData } from '../../../utils/async-get-data';
import { asyncDataReducer, initialState } from '../../../utils/async-data-states/reducer'
import { ERROR, FETCHED } from '../../../utils/async-data-states/types'
import Header from '../../blocks/header/header'
import LeadershipsItem from './items'
import DataPreloader from '../../blocks/data-preloader/index'

const LeadershipsComponent: React.FunctionComponent = () => {
    const [state, dispatch] = useReducer(asyncDataReducer, initialState)

    useEffect(() => {
        getAsyncData({ 
                api_v: 0, 
                url: 'articles',
                params: {
                    'category': 'leaderships'
                }
            })
            .then(result => dispatch({ type: FETCHED, payload: { data: result.data } }))
            .catch(error => dispatch({ type: ERROR, payload: { errorString: error } }))
    }, [])

    useEffect(() => {
        document.title = 'Руководство'
    })

    return (
        <div className="content">
            {!state.loading ?
                <React.Fragment>
                    <Header title={state.data['category']['title']} subtitle={state.data['category']['descriptor']}/>
                    <article className="container">
                        <div className="list">
                            {
                                state.data['data'].map((item: {}, index: number) => {
                                    const classList = cn({
                                        'item': true,
                                        'leadership-item': true,
                                        'flex': true,
                                        'preview': true
                                    })
                                    
                                    return (
                                        <LeadershipsItem key={index}
                                            id={item['id']}
                                            title={item['title']}
                                            subtitle={item['subtitle']}
                                            text={item['text']}
                                            image={{url: item['main_image']['image']}}
                                            classList={classList}
                                            isPreview={true}/>
                                    )
                                })
                            }
                        </div>
                    </article>
                </React.Fragment>
                : <DataPreloader/>
            }
        </div>
    )
}

export default LeadershipsComponent;