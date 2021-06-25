import {
	AsyncDataActions,
	AsyncDataStatesTypes,
	ERROR,
	FETCHED,
	LOADING,
} from './types'

export const initialState: AsyncDataStatesTypes = {
	data: null,
	loading: true,
	isError: false,
	errorString: null,
}

export const asyncDataReducer = (state = initialState, action: AsyncDataActions)
: AsyncDataStatesTypes => {
	switch (action.type) {
		case ERROR:
			return {
				...state,
				errorString: action.payload.errorString,
				isError: true,
				loading: false,
			}
		case FETCHED:
			return {
				...state,
				data: action.payload.data,
				loading: false,
			}
		case LOADING:
			return {
				...state,
				loading: true,
			}
		default: {
			return state
		}
	}
}
