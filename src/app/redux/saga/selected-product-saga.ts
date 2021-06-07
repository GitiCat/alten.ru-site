import { Action } from 'redux'
import { call, put, takeEvery } from 'redux-saga/effects'
import { FETCHED } from '../../utils/async-data-states/types'
import { getAsyncData } from '../../utils/async-get-data'

interface IFetchCategoryProductTypes {
    categoryId: number
}

interface IFetchCategoryProductAction extends Action, IFetchCategoryProductTypes  { type: typeof FETCHED }

function* fetchCategoryProduct(action: IFetchCategoryProductTypes) {
    const data = yield call(async () => {
        const res = await getAsyncData({
            api_v: 0,
            url: 'products',
            params: {
                'category': action.categoryId
            }
        })
        return res.data
    })
    
    yield put(data)
}

export function* fetchCategoryProductSaga() {
    yield takeEvery<IFetchCategoryProductAction>(FETCHED, fetchCategoryProduct)
}