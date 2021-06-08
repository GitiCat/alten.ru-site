import { Action } from 'redux'
import { call, put, takeEvery } from 'redux-saga/effects'
import { ERROR, FETCHED, LOADING } from '../../utils/async-data-states/types'
import { getAsyncData } from '../../utils/async-get-data'

interface ILoadingCategoryProductTypes {
    categoryId: number
}

interface ILoadingCategoryProductAction extends Action, ILoadingCategoryProductTypes { type: typeof LOADING }

const getApi = async (categoryId: number) => {
    try {
        const response = await getAsyncData({
            api_v: 0,
            url: 'products',
            params: { 'category': categoryId }
        })
        return response.data
    } catch (error) {
        throw error
    }
}

function* fetchCategoryProduct(action: ILoadingCategoryProductTypes) {
    try {
        const responseData = yield call(getApi, action.categoryId)
        yield put({ type: FETCHED, payload: { data: responseData } })
    } catch (error) {
        yield put({ type: ERROR, payload: { errorString: error }})
    }
}

export function* fetchCategoryProductSaga() {
    yield takeEvery<ILoadingCategoryProductAction>(LOADING, fetchCategoryProduct)
}