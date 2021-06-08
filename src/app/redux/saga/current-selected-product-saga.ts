import { Action } from 'redux'
import { put, takeEvery } from 'redux-saga/effects'
import {
    SET_PRODUCT,
    SET_PRODUCT_CATEGORY_ID,
    SET_PRODUCT_ITEM_ID,
    UPDATE_PRODUCT,
    UPDATE_PRODUCT_CATEGORY_ID,
    UPDATE_PRODUCT_ITEM_ID
} from '../store/products-selected/types'
import { SelectedProductTypes } from '../store/products-selected/types'

interface ISetProductTypes {
    payload: {
        categoryId: number,
        productId: number
    }
}

interface ISetCategoryProductTypes {
    payload: {
        categoryId: number
    }
}

interface ISetProductItemTypes {
    payload: {
        productId: number
    }
}

interface ISetProductAction extends Action, ISetProductTypes { type: typeof UPDATE_PRODUCT }
interface ISetCategoryProductAction extends Action, ISetCategoryProductTypes { type: typeof UPDATE_PRODUCT_CATEGORY_ID }
interface ISetProductItemAction extends Action, ISetProductItemTypes { type: typeof UPDATE_PRODUCT_ITEM_ID }

function* setProduct(action: ISetProductTypes) {
    const { categoryId, productId } = action.payload
    const payload: SelectedProductTypes = {
        selectedCategoryId: categoryId,
        selectedItemId: productId
    }

    yield put({ type: SET_PRODUCT, payload: payload})
}

function* setCategoryProduct(action: ISetCategoryProductTypes) {
    const { categoryId } = action.payload
    yield put({ type: SET_PRODUCT_CATEGORY_ID, categoryId })
}

function* setProductItem(action: ISetProductItemTypes) {
    const { productId } = action.payload
    yield put({ type: SET_PRODUCT_ITEM_ID, productId })
}

export function* currentSelectedProductRoot() {
    yield takeEvery<ISetProductAction>(UPDATE_PRODUCT, setProduct)
    yield takeEvery<ISetCategoryProductAction>(UPDATE_PRODUCT_CATEGORY_ID, setCategoryProduct)
    yield takeEvery<ISetProductItemAction>(UPDATE_PRODUCT_ITEM_ID, setProductItem)
}