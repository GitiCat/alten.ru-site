import React from 'react'
import {
    SelectedProductTypes,
    SelectedProductActions
} from '../redux/store/products-selected/types'
import {
    initialState
} from '../redux/store/products-selected/reducer'

type SelectedProductContextTypes = {
    state: SelectedProductTypes,
    dispatch: React.Dispatch<SelectedProductActions>
}

const initialContext: SelectedProductContextTypes ={
    state: initialState,
    dispatch: null
}

const SelectedProductContext: React.Context<SelectedProductContextTypes> 
    = React.createContext(initialContext)

export {
    SelectedProductContextTypes,
    SelectedProductContext
}