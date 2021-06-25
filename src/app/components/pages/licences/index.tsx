import React, { useEffect, useReducer } from 'react'
import { getAsyncData } from '../../../utils/async-get-data'
import { asyncDataReducer, initialState } from '../../../utils/async-data-states/reducer'
import { ERROR, FETCHED } from '../../../utils/async-data-states/types'
import Header from '../../blocks/header/header'
import LicencesItem from './items'
import DataPreloader from '../../blocks/data-preloader/index'

const LicencesComponent: React.FunctionComponent = () => {
	const [state, dispatch] = useReducer(asyncDataReducer, initialState)

	useEffect(() => {
		getAsyncData({
			api_v: 0,
			url: 'articles',
			params: {
				'category': 'licences',
			},
		})
			.then(result => dispatch({ type: FETCHED, payload: { data: result.data } }))
			.catch(error => dispatch({ type: ERROR, payload: { errorString: error } }))
	}, [])

	useEffect(() => {
		document.title = 'Лицензии'
	})

	return (
		<div className="content">
			{!state.loading ?
				<React.Fragment>
					<Header title={state.data['category']['title']} subtitle={state.data['category']['descriptor']}/>
					<article className="article container">
						<div className="list">
							{
								state.data['data'].map((item: {}, index: number) => <LicencesItem key={index}
									title={item['title']}
									subtitle={item['subtitle']}
									text={item['text']}
									image={{ url: item['main_image']['image'] }}
								/>)
							}
						</div>
					</article>
				</React.Fragment>
				: <DataPreloader/>
			}
		</div>
	)
}

export default LicencesComponent
