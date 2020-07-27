import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import NewsItem from './items/items';

type NewsStateTypes = {
    data?: [string, string | number]
    ready?: boolean
}

const NewsElement: React.FunctionComponent<NewsStateTypes> = ( {data = null, ready = false } ) => {

    const [apiData, setApiData] = useState(data)
    const [isReady, setReadyState] = useState(ready)

    useEffect(() => {
        const getAsyncApiData = async () => {
            const result = await axios({
                method: "GET",
                url: "/api_v0/news/",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            setApiData(result.data);
            setReadyState(true)
        }

        getAsyncApiData();
    }, [])

    return (
        <div className="container news">
            <div className="title">
                <h2>Новости</h2>
                <span>Свежие новости космической отрасли и деятельности предприятия</span>
            </div>
            <div className="content">
                <Link to='/news' className="light-link-1" style={{alignSelf: 'flex-start'}}>Показать все новости</Link>

                <div className="h-list">
                    {isReady &&
                        apiData.slice(0, 4).map((item, index) => {
                            return <NewsItem key={index}
                                id = {item['id']}
                                title = {item['name']}
                                subtitle = {item['subtitle']}
                                text = {item['text']}
                                mainImage = {item['main_image']}
                                createdAt = {item['create_at']}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default NewsElement;