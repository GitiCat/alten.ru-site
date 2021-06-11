import { all } from 'redux-saga/effects'
import { currentSelectedProductRoot } from './current-selected-product-saga'
import { asyncDataRequestSaga } from './async-data-request-saga'

export default function* rootSaga() {
    yield all([
        asyncDataRequestSaga(),
        currentSelectedProductRoot()
    ])
}