import { 
    SELECTED_PRODUCT_CATEGORY_ID, 
    SELECTED_PRODUCT_ITEM_ID 
} from '../../../consts/product-selected-consts'
import {
    SelectedProductTypes,
    SelectedProductActions,
    SET_PRODUCT,
    SET_PRODUCT_ITEM_ID,
    SET_PRODUCT_CATEGORY_ID
} from './types'


export const initialState: SelectedProductTypes = {
    selectedItemId: parseInt(sessionStorage.getItem(SELECTED_PRODUCT_ITEM_ID)) | 0,
    selectedCategoryId: parseInt(sessionStorage.getItem(SELECTED_PRODUCT_CATEGORY_ID)) | 0
}

export const productSelectedReducer = (state = initialState, action: SelectedProductActions)
    : SelectedProductTypes => {
    switch (action.type) {
        case SET_PRODUCT: {
            return {
                selectedCategoryId: action.payload.selectedCategoryId,
                selectedItemId: action.payload.selectedItemId
            }
        }
        case SET_PRODUCT_ITEM_ID: {
            return {
                selectedCategoryId: state.selectedCategoryId,
                selectedItemId: action.payload
            }
        }
        case SET_PRODUCT_CATEGORY_ID: {
            return {
                selectedCategoryId: action.payload,
                selectedItemId: state.selectedItemId
            }
        }
        default:
            return state
    }
}