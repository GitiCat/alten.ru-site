import React from 'react'
import { GlobalContextTypes } from '../types/global-context-types'

const initialGlobalContext: GlobalContextTypes = {
    productCategories: {
        data: {},
        responseStatus: {
            statusCode: null,
            errorText: null,
            isError: false
        }
    }, 
    isInitialized: false
}

const GlobalContext = React.createContext<GlobalContextTypes>(initialGlobalContext)

export {
    initialGlobalContext,
    GlobalContext
}