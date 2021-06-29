export interface AsyncDataStatesTypes {
	data?: Array<any>
	loading?: boolean
	isError?: boolean
	errorString?: string
}

export const ERROR = 'ERROR'
export const FETCHED = 'FETCHED'
export const LOADING = 'LOADING'

interface ErrorState {
	type: typeof ERROR
	payload: AsyncDataStatesTypes
}

interface FetchedState {
	type: typeof FETCHED
	payload: AsyncDataStatesTypes
}

interface LoadingState {
	type: typeof LOADING
	payload: AsyncDataStatesTypes
}

export type AsyncDataActions = ErrorState | FetchedState | LoadingState
