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
        <section className="container news">
            <header>
                <h2>Новости</h2>
                <p>Свежие новости космической отрасли и деятельности предприятия</p>
            </header>
            <div className="content flex flex-dir-col">
                <Link to='/news' className="_contained dark" style={{alignSelf: 'flex-start'}}>Показать все новости</Link>
                <div className="h-list flex">
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
        </section>
    )
}

export default NewsElement;