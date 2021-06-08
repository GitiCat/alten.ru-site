import { all } from 'redux-saga/effects'
import { fetchCategoryProductSaga } from './selected-product-saga'
import { currentSelectedProductRoot } from './current-selected-product-saga'

export default function* rootSaga() {
    yield all([
        fetchCategoryProductSaga(),
        currentSelectedProductRoot()
    ])
}