import { Action } from 'redux'

export interface SelectedProductTypes {
	selectedCategoryId: number
	selectedItemId: number
}

export const SET_PRODUCT = 'SET_PRODUCT'
export const SET_PRODUCT_CATEGORY_ID = 'SET_PRODUCT_CATEGORY_ID'
export const SET_PRODUCT_ITEM_ID = 'SET_PRODUCT_ITEM_ID'

export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
export const UPDATE_PRODUCT_CATEGORY_ID = 'UPDATE_PRODUCT_CATEGORY_ID'
export const UPDATE_PRODUCT_ITEM_ID = 'UPDATE_PRODUCT_ITEM_ID'

interface SetProductAction extends Action {
	type: typeof SET_PRODUCT
	payload: SelectedProductTypes
}

interface SetProductCategoryIdAction extends Action {
	type: typeof SET_PRODUCT_CATEGORY_ID
	payload: {
		selectedCategoryId: number
	}
}

interface SetProductItemIdAction extends Action {
	type: typeof SET_PRODUCT_ITEM_ID
	payload: {
		selectedItemId: number
	}
}

export type SelectedProductActions =
    | SetProductAction
    | SetProductCategoryIdAction
    | SetProductItemIdAction
