import React, { useEffect } from 'react'
import { IProductTypes } from '../../../../types/api-types'
import ProductSelectedSliderItem from './item'
import {
    InitialSliderUtils,
    onMouseDownEventHandler,
    onMouseUpEventHandler,
    onMouseMoveEventHandle
} from './utils/index'

type ProductSelectedSliderTypes = {
    items: Array<IProductTypes> | {}
}

const ProductSelectedSlider: React.FunctionComponent<ProductSelectedSliderTypes> = (props) => {
    useEffect(() => {
        InitialSliderUtils()
    })
    
    return (
        <div className="product-selected--slider"
            onMouseDown={onMouseDownEventHandler}
            onMouseUp={onMouseUpEventHandler}
            onMouseMove={onMouseMoveEventHandle}>
            <div className="product-selected--slider_container">
                <div className="slider--list">
                    <div className="slider--track">
                        {(props.items as []).length > 0 ?
                            (props.items as []).map((item: IProductTypes, index: number) => {
                                const image: string = item.main_image === null
                                    ? null
                                    : item.main_image.image

                                return (
                                    <ProductSelectedSliderItem key={index}
                                        id={index}
                                        title={item.title}
                                        image_url={image} />
                                )
                            })
                            : <div className=""></div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductSelectedSlider