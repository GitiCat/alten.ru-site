import React, { useEffect, useReducer } from 'react'
import { getAsyncData } from '../../../utils/async-get-data'
import { asyncDataReducer, initialState } from '../../../utils/async-data-states/reducer'
import { ERROR, FETCHED } from '../../../utils/async-data-states/types'
import Header from '../../blocks/header/header'
import DocumentsWrapperList from './wrapperList'
import DataPreloader from '../../blocks/data-preloader/index'

const DocumentsComponent: React.FunctionComponent = () => {
	const [state, dispatch] = useReducer(asyncDataReducer, initialState)

	useEffect(() => {
		getAsyncData({
			api_v: 0,
			url: 'documents',
		})
			.then(result => dispatch({ type: FETCHED, payload: { data: result.data } }))
			.catch(error => dispatch({ type: ERROR, payload: { errorString: error } }))
	}, [])

	useEffect(() => {
		document.title = 'Документы'
	})

	return (
		<div className='content'>
			{!state.loading ?
				<React.Fragment>
					<Header title='Документы' subtitle='Общедоступные документы предприятия'/>
					<article className="article container">
						<div className="wrapper">
							{
								(state.data as []).map((item: {}, index: number) =>
									<DocumentsWrapperList key={index}
										title = {item['title']}
										descriptor = {item['descriptor']}
										items = {item['items']}
									/>
								)
							}
						</div>
					</article>
				</React.Fragment>
				: <DataPreloader/>
			}
		</div>
	)
}

export default DocumentsComponent
