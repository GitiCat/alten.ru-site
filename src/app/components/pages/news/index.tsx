import React, { useReducer, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Header from '../../blocks/header/header'
import NewsItem from './item'
import { DateFormat, isNew } from '../../../utils/date'
import { getAsyncData } from '../../../utils/async-get-data'
import { asyncDataReducer, initialState } from '../../../utils/async-data-states/reducer'
import { FETCHED, ERROR } from '../../../utils/async-data-states/types'

const NewsComponent: React.FunctionComponent = () => {
    const [state, dispatch] = useReducer(asyncDataReducer, initialState)

    useEffect(() => {
        getAsyncData({
            api_v: 0,
            url: 'news',
            params: {}
        })
        .then(result => dispatch({ type: FETCHED, payload: { data: result.data } }))
        .catch(error => dispatch({ type: ERROR, payload: { errorString: error } }))
    }, [])
    
    return (
        <div className="content">
            <Helmet>
                <title>Новости</title>
            </Helmet>
            {!state.loading &&
                <React.Fragment>
                    <Header title='Новости' subtitle='Новости космической отрасли и деятельности предприятия'/>
                    <article className="article container">
                        <div className="list">
                            {
                                (state.data as []).map((item: {}, index: number) => {
                                    const isItemNew: boolean = isNew(item['created_at'], 7);
                                    const date: string = DateFormat(item['created_at'])

                                    return (
                                        <NewsItem key={index}
                                            id={item['id']}
                                            title={item['title']}
                                            subtitle={item['subtitle']}
                                            text={item['text']}
                                            img={{url: item['main_image']}}
                                            date={date}
                                            is_new={isItemNew}/>
                                    )
                                })
                            }
                        </div>
                    </article>
                </React.Fragment>
            }
        </div>
    )
}

export default NewsComponent