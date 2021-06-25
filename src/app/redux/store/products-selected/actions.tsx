import {
	SET_PRODUCT,
	SET_PRODUCT_CATEGORY_ID,
	SET_PRODUCT_ITEM_ID,
	SelectedProductActions,
	SelectedProductTypes,
} from './types'

export const updateProductAction = (select: SelectedProductTypes): SelectedProductActions => ({
	type: SET_PRODUCT,
	payload: select,
})

export const updateProductCategoryIdAction = (index: number): SelectedProductActions => ({
	type: SET_PRODUCT_CATEGORY_ID,
	payload: {
		selectedCategoryId: index,
	},
})

export const updateProductItemIdAction = (index: number): SelectedProductActions => ({
	type: SET_PRODUCT_ITEM_ID,
	payload: {
		selectedItemId: index,
	},
})
