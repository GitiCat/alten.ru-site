import {
    SET_PRODUCT,
    SET_PRODUCT_ITEM_ID,
    SET_PRODUCT_CATEGORY_ID
} from '../store/products-selected/types'
import {
    SELECTED_PRODUCT_ITEM_ID,
    SELECTED_PRODUCT_CATEGORY_ID
} from '../consts/product-selected-consts'
import {
    SelectedProductTypes,
    SelectedProductActions
} from '../store/products-selected/types'

const ChangeProductSelectedMiddleware = (action: SelectedProductActions, state: SelectedProductTypes) => {
    switch(action.type) {
        case SET_PRODUCT: {    
            sessionStorage.setItem(SELECTED_PRODUCT_ITEM_ID, `${action.payload.selectedItemId}`)
            sessionStorage.setItem(SELECTED_PRODUCT_CATEGORY_ID, `${action.payload.selectedCategoryId}`)
            break
        }
        case SET_PRODUCT_ITEM_ID: {
            sessionStorage.setItem(SELECTED_PRODUCT_ITEM_ID, `${action.payload}`)
            break
        }
        case SET_PRODUCT_CATEGORY_ID: {
            sessionStorage.setItem(SELECTED_PRODUCT_CATEGORY_ID, `${action.payload}`)
            break
        }
        default:
            return;
    }
}

export default ChangeProductSelectedMiddleware