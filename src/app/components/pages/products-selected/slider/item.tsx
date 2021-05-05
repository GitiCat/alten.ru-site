import React from 'react'
import cn from 'classnames'
import { IProductPreviewTypes } from '../../../../types/api-types'

const ProductSelectedSliderItem: React.FunctionComponent<IProductPreviewTypes> = (props) => {
    const bgBlockClasses = cn({
        'slider--item_image': true,
        'no-image': props.image_url === null
    })

    return (
        <div className='slider-item'>
            <input id={`slider-item--${props.id}`} type="radio" name="product-selected-slider--item"/>
            <label htmlFor={`slider-item--${props.id}`}>
                <div className={bgBlockClasses} style={{backgroundImage: `url(${props.image_url})`}}/>
                <span>{props.title}</span>
            </label>
        </div>
    )
}

export default React.memo(ProductSelectedSliderItem)