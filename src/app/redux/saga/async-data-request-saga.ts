import { Action } from 'redux'
import { call, put, takeEvery } from 'redux-saga/effects'
import { LOADING, FETCHED, ERROR } from '../../utils/async-data-states/types'
import { getAsyncData } from '../../utils/async-get-data'

export interface IAsyncDataRequestTypes {
    url: string,
    params?: {}
}

interface IActionTypes {
    payload: IAsyncDataRequestTypes
}

interface IAsyncDataRequestAction extends Action, IActionTypes { type: typeof LOADING }

const getApi = async ({ url, params }: IAsyncDataRequestTypes) => {
    try {
        const response = await getAsyncData({
            url: url,
            api_v: 0,
            params: params
        })
        return response.data
    } catch (error) {
        throw error
    }
}

function* asyncDataRequest(action: IActionTypes) {
    try {
        const { url, params } = action.payload
        const data = yield call(getApi, { url, params })
        yield put({ type: FETCHED, payload: { data: data } })
    } catch (error) {
        yield put({ type: ERROR, payload: { errorString: error } })
    }
}

export function* asyncDataRequestSaga() {
    yield takeEvery<IAsyncDataRequestAction>(LOADING, asyncDataRequest)
}