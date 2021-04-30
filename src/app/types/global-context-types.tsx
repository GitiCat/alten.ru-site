import {
    IProductCategoryTypes,
    IApiResponseStatus
} from './api-types'

interface IGlobalContextProguctCategoryTypes {
    data: Array<IProductCategoryTypes> | {}
    responseStatus: IApiResponseStatus
}

interface GlobalContextTypes {
    productCategories: IGlobalContextProguctCategoryTypes
    isInitialized: boolean
}

export {
    GlobalContextTypes
}