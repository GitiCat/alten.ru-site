import React, { useReducer, useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom'
import Header from '../../blocks/header/header'
import { DateFormat, isNew } from '../../../utils/date'

import { getAsyncData } from '../../../utils/async-get-data'
import { asyncDataReducer, initialState } from '../../../utils/async-data-states/reducer'
import { FETCHED, ERROR } from '../../../utils/async-data-states/types'

import ScheduleIcon from '@material-ui/icons/Schedule';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const NewsSelectedComponent: React.FunctionComponent<RouteComponentProps> = ({ match }) => {
    const [state, dispatch] = useReducer(asyncDataReducer, initialState)

    useEffect(() => {
        const item_id: string = match.params['news_id']

        getAsyncData({
            api_v: 0,
            url: 'news',
            params: {
                'id': item_id
            }
        })
            .then(result => dispatch({ type: FETCHED, payload: { data: result } }))
            .catch(error => dispatch({ type: ERROR, payload: { errorString: error } }))
    }, [])

    var item: {} = null
    var isItemNew: boolean = false,
        date: string = null

    if (!state.loading) {
        item = state.data[0]
        isItemNew = isNew(item['created_at'], 7);
        date = DateFormat(item['created_at'])
    }

    return (
        <div className="content">
            {!state.loading &&
                <React.Fragment>
                    <Header title='Новости' subtitle='Новости космической отрасли и деятельности предприятия' />
                    <div className="article">
                        <div className="news-item-selected">
                            <div className="date flex">
                                <span className='flex'>
                                    <ScheduleIcon />
                                    {date}
                                </span>
                                {isItemNew &&
                                    <span className="new flex">
                                        <WhatshotIcon />
                                        Новое
                                </span>
                                }
                            </div>
                            <picture>
                                <img src={item['main_image']} alt=""/>
                            </picture>
                            <div className="title">
                                <h2>{item['title']}</h2>
                                {item['subtitle'] !== null &&
                                    <span>{item['subtitle']}</span>
                                }
                            </div>
                            <div className="text" dangerouslySetInnerHTML={{ __html: item['text'] }} />
                            <div className="links">
                                <a href='/news' className="light-link-1">
                                    Вернуться
                                </a>
                                <a href={item['original_url']} className="light-link-1">
                                    Оригинальная статья
                                </a>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            }
        </div>
    )
}

export default NewsSelectedComponent