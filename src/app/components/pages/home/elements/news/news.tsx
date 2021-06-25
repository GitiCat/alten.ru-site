import React, { useEffect, useReducer } from 'react'
import { Link } from 'react-router-dom'
import { getAsyncData } from '../../../../../utils/async-get-data'
import { asyncDataReducer, initialState } from '../../../../../utils/async-data-states/reducer'
import { ERROR, FETCHED } from '../../../../../utils/async-data-states/types'

import NewsItem from './items/items'

const NewsElement: React.FunctionComponent = () => {
	const [state, dispatch] = useReducer(asyncDataReducer, initialState)

	useEffect(() => {
		getAsyncData({
			api_v: 0,
			url: 'news',
			params: null,
		})
			.then(result => dispatch({ type: FETCHED, payload: { data: result.data } }))
			.catch(error => dispatch({ type: ERROR, payload: { errorString: error } }))
	}, [])

	return (
		<section className="container news">
			<header>
				<h2>Новости</h2>
				<p>Свежие новости космической отрасли и деятельности предприятия</p>
			</header>
			<div className="content flex flex-dir-col">
				<Link to='/news' className="_contained dark" style={{ alignSelf: 'flex-start' }}>Показать все новости</Link>
				<div className="h-list flex">
					{!state.loading &&
                        (state.data as []).slice(0, 4).map((item, index) => <NewsItem key={index}
                        	id={item['id']}
                        	title={item['name']}
                        	subtitle={item['subtitle']}
                        	text={item['text']}
                        	mainImage={item['main_image']}
                        	createdAt={item['create_at']}
                        />)
					}
				</div>
			</div>
		</section>
	)
}

export default NewsElement
