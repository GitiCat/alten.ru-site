import React from 'react'

type ProductContextTypes = {
    id?: number
    category_id?: number
}

export const ProductContextDefaultValues : ProductContextTypes = {
    id: 0,
    category_id: 1
}

export const setProductContext = (values:ProductContextTypes = ProductContextDefaultValues) => {
    ProductContext['id'] = values.id
    ProductContext['category_id'] = values.category_id
}

const ProductContext = React.createContext({})

export const ProductProvider = ProductContext.Provider

export default ProductContext