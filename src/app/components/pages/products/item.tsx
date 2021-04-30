import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import cn from 'classnames'
import {
    SelectedProductContext,
    SelectedProductContextTypes
} from '../../../contexts/selected-product-context'
import { SET_PRODUCT } from '../../../store/products-selected/types'
import { History } from 'history'

type CategoryProductItemTypes = {
    title: string,
    image_url: string,
    product_id: number,
    category_id: number,
}

const redirectToSelectedProduct = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    context: SelectedProductContextTypes,
    componentProps: CategoryProductItemTypes,
    browserHistory: History<unknown> | string[]
) => {
    e.preventDefault()

    context.dispatch({
        type: SET_PRODUCT,
        payload: {
            selectedCategoryId: Number(componentProps.category_id),
            selectedItemId: Number(componentProps.product_id)
        }
    })

    browserHistory.push(e.currentTarget.pathname)
}

const CategoryProductItem: React.FunctionComponent<CategoryProductItemTypes> = (props) => {
    const productContext: SelectedProductContextTypes = useContext(SelectedProductContext)
    const browserHistory: History<unknown> | string[] = useHistory()

    const imgClasses = cn({
        'img': true,
        'no-image': props.image_url == null ? true : false
    })

    return (
        <div className="item products-list-item">
            <div className={imgClasses} style={{ backgroundImage: props.image_url == null ? '' : 'url(' + props.image_url + ')' }}></div>
            <a href={`/products/${props.category_id}`} onClick={(e) => redirectToSelectedProduct(e, productContext, props, browserHistory)} className="block-title flex">
                <h3>{props.title}</h3>
                <svg width="45" height="45" viewBox="0 0 45 45">
                    <rect rx='50' ry='50' x='2.5' y='2.5' />
                    <g>
                        <path id='path1' d='M24,28l5-5-5-5' />
                        <path id='path2' d='M17,28l5-5-5-5' />
                    </g>
                </svg>
            </a>
        </div>
    )
}

export default CategoryProductItem