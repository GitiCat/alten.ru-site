import React, { useEffect, useReducer } from 'react'
import { getAsyncData } from '../../../utils/async-get-data'
import { asyncDataReducer, initialState } from '../../../utils/async-data-states/reducer'
import { ERROR, LOADING } from '../../../utils/async-data-states/types'
import Header from '../../blocks/header/header'
import EntryBlock from '../../blocks/entry-content/index'
import DataPreloader from '../../blocks/data-preloader/index'

const GalleryComponent: React.FunctionComponent = () => {
	const [state, dispatch] = useReducer(asyncDataReducer, initialState)

	useEffect(() => {
		getAsyncData({
			api_v: 0,
			url: 'gallery',
			params: null,
		})
			.then(result => dispatch({ type: LOADING, payload: { data: result.data } }))
			.catch(error => dispatch({ type: ERROR, payload: { errorString: error } }))
	}, [])

	useEffect(() => {
		document.title = 'Галерея'
	})

	return (
		<div className='content'>
			{state.loading ?
				<React.Fragment>
					<Header title='Галерея' subtitle='Фотоальбомы предприятия'/>
					<article className="container">
						{state.data != null
							? <div className=""></div>
							: <EntryBlock/>
						}
					</article>
				</React.Fragment>
				: <DataPreloader/>
			}
		</div>
	)
}

export default GalleryComponent
