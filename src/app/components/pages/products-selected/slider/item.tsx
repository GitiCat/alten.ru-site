import React, { Dispatch, useContext, useEffect } from 'react'
import cn from 'classnames'
import { SelectedProductContext, SelectedProductContextTypes } from '../../../../contexts/selected-product-context'
import { IProductPreviewTypes } from '../../../../types/api-types'
import { SelectedProductActions, SET_PRODUCT_ITEM_ID } from '../../../../redux/store/products-selected/types'

//  Const value active input element class name
const INPUT_ACTIVE_CLASS_NAME: string = 'selected'

/**
 * Input element change event handler function
 * @param e Input element change event
 */
const sliderInputChange = (e: React.ChangeEvent<HTMLInputElement>, dispatch: Dispatch<SelectedProductActions>) => {
    document.querySelectorAll('.slider-item').forEach((item: HTMLDivElement) => {
        if (item.classList.contains(INPUT_ACTIVE_CLASS_NAME))
            item.classList.remove(INPUT_ACTIVE_CLASS_NAME)
    })

    e.currentTarget.parentElement.classList.add(INPUT_ACTIVE_CLASS_NAME)

    const { productId } = e.currentTarget.dataset
    dispatch({
        type: SET_PRODUCT_ITEM_ID,
        payload: Number(productId)
    })
}

const ProductSelectedSliderItem: React.FunctionComponent<IProductPreviewTypes> = (props) => {
    const context: SelectedProductContextTypes = useContext(SelectedProductContext)
    const reference = React.createRef<HTMLInputElement>()
    const bgBlockClasses = cn({
        'slider--item_image': true,
        'no-image': props.image_url === null
    })

    useEffect(() => {
        // if(props.id === context.state.selectedItemId) {
        //     reference
        //         .current
        //         .checked = true
                
        //     reference
        //         .current
        //         .parentElement
        //         .classList
        //         .add(INPUT_ACTIVE_CLASS_NAME)
        // }
    })

    return (
        <div className='slider-item'>
            <input id={`slider-item--${props.id}`} type="radio" name="product-selected-slider--item"
                data-product-id={props.id} onChange={(e) => { sliderInputChange(e, context.dispatch) }} 
                ref={reference}/>
            <label htmlFor={`slider-item--${props.id}`}>
                <div className={bgBlockClasses} style={{ backgroundImage: props.image_url !== null && `url(${props.image_url})`}} />
                <span>{props.title}</span>
            </label>
        </div>
    )
}

export default React.memo(ProductSelectedSliderItem)