import React from 'react'
import { IProductTypes } from '../../../../types/api-types'
import ProductSelectedSliderItem from './item'

type ProductSelectedSliderTypes = {
    items: Array<IProductTypes> | {}
}

const ProductSelectedSlider: React.FunctionComponent<ProductSelectedSliderTypes> = (props) => {
    return (
        <div className="product-selected--slider flex flex-dir-row">
            {(props.items as []).length > 0 ?
                (props.items as []).map((item: IProductTypes, index: number) => {
                    const image: string = item.main_image === null 
                        ? null 
                        : item.main_image.image
                        
                    return (
                        <ProductSelectedSliderItem key={index}
                            id={index}
                            title={item.title}
                            image_url={image}/>
                    )
                })
                : <div className=""></div>
            }
        </div>
    )
}

export default ProductSelectedSlider