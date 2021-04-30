import React, { useContext, useEffect } from 'react'
import Header from '../../blocks/header/header'
import { 
    SelectedProductContext,
    SelectedProductContextTypes
} from '../../../contexts/selected-product-context'

const ProductsSelected: React.FunctionComponent = () => {
    const context: SelectedProductContextTypes = useContext(SelectedProductContext)
    
    useEffect(() => {
        
    }, [])

    return (
        <div className="content">
            <React.Fragment>
                <Header title='Продукция' subtitle='Продукция нашего предприятия' />
            </React.Fragment>
        </div>
    )
}

export default ProductsSelected;