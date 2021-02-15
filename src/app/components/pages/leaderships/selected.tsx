import React, { useEffect, useReducer } from 'react'
import cn from 'classnames'
import { getAsyncData } from '../../../utils/async-get-data'
import { ERROR, FETCHED } from '../../../utils/async-data-states/types'
import { asyncDataReducer, initialState } from '../../../utils/async-data-states/reducer'
import Header from '../../blocks/header/header'
import DataPreloader from '../../blocks/data-preloader/index'
import EntryBlock from '../../blocks/entry-content/index'
import LeadershipItem from './items'
import { RouteComponentProps } from 'react-router-dom'

const SelectedLeadership: React.FunctionComponent<RouteComponentProps> = ({ match }) => {
    const [state, dispatch] = useReducer(asyncDataReducer, initialState)

    useEffect(() => {        
        getAsyncData({
            api_v: 0,
            url: 'articles',
            params: {
                'category': 'leaderships',
                'id': match.params['id']
            }
        })
            .then(result => dispatch({ type: FETCHED, payload: { data: result.data } }))
            .catch(error => dispatch({ type: ERROR, payload: { errorString: error } }))
    }, [])

    useEffect(() => {
        document.title = 'Руководство'
    })

    const classList = cn({
        'item': true,
        'leadership-item': true,
        'flex': true
    })

    return (
        <div className="content">
            {!state.loading ?
                <React.Fragment>
                    <Header title={state.data['category']['title']} subtitle={state.data['category']['descriptor']} />
                    <article className="container">
                        {state.data != null ?
                            state.data['data'].map((item: {}, index: number) => {
                                return (
                                    <LeadershipItem key={index}
                                        id={item['id']}
                                        title={item['title']}
                                        subtitle={item['subtitle']}
                                        text={item['text']}
                                        image={{url: item['main_image']['image']}}
                                        classList={classList}
                                        isPreview={false}
                                    />
                                )
                            })
                            : <EntryBlock/>
                        }
                    </article>
                </React.Fragment>
                : <DataPreloader />
            }
        </div>
    )
}

export default SelectedLeadership