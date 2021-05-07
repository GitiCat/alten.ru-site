import React, { ChangeEvent, InputHTMLAttributes } from 'react'
import cn from 'classnames'
import { IProductPreviewTypes } from '../../../../types/api-types'

//  Const value active input element class name
const INPUT_ACTIVE_CLASS_NAME: string = 'selected'

/**
 * Input element change event handler function
 * @param e Input element change event
 */
const sliderInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    document.querySelectorAll('.slider-item').forEach((item: HTMLDivElement) => {
        if (item.classList.contains(INPUT_ACTIVE_CLASS_NAME))
            item.classList.remove(INPUT_ACTIVE_CLASS_NAME)
    })

    e.currentTarget.parentElement.classList.add(INPUT_ACTIVE_CLASS_NAME)
}

const ProductSelectedSliderItem: React.FunctionComponent<IProductPreviewTypes> = (props) => {
    const bgBlockClasses = cn({
        'slider--item_image': true,
        'no-image': props.image_url === null
    })

    return (
        <div className='slider-item'>
            <input id={`slider-item--${props.id}`} type="radio" name="product-selected-slider--item"
                onChange={(e) => { sliderInputChange(e) }} />
            <label htmlFor={`slider-item--${props.id}`}>
                <div className={bgBlockClasses} style={{ backgroundImage: `url(${props.image_url})` }} />
                <span>{props.title}</span>
            </label>
        </div>
    )
}

export default React.memo(ProductSelectedSliderItem)