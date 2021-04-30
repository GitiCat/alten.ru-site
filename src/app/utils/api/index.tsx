import { getAsyncData } from '../async-get-data'
import { GlobalContextTypes } from '../../types/global-context-types'
import { initialGlobalContext } from '../../contexts/global-context'

const initialGlobalStateApi = async (): Promise<GlobalContextTypes> => {
    let result: GlobalContextTypes = initialGlobalContext

    return new Promise((resolve, reject) => {
        getAsyncData({
            api_v: 0,
            url: 'categories-product',
            params: {}
        })
        .then(response => {
            result.productCategories = {
                data: response.data,
                responseStatus: {
                    statusCode: response.status,
                    errorText: response.message,
                    isError: false
                }
            }
            resolve(result)
        })
        .catch(error => {
            console.log(error);
            reject(error)
        })
    })
}

export {
    initialGlobalStateApi
}