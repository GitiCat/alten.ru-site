import React from 'react'
import { useHistory } from 'react-router-dom'
import cn from 'classnames'
import { History } from 'history'

type CategoryProductItemTypes = {
    id: number,
    title: string,
    image_url: string,
    product_id: number,
    category_id: number,
}

const redirect = (history: History<any>, props: { categoryId: number, productId: number }) => {
    history.push({
        pathname: `/products/${props.categoryId}`,
        state: {
            category_id: props.categoryId,
            product_id: props.productId
        }
    })
}

const CategoryProductItem: React.FunctionComponent<CategoryProductItemTypes> = (props) => {
    const history = useHistory()
    const imgClasses = cn({
        'img': true,
        'no-image': props.image_url == null ? true : false
    })

    return (
        <div className="item products-list-item">
            <div className={imgClasses} style={{ backgroundImage: props.image_url == null ? '' : 'url(' + props.image_url + ')' }}></div>
            <a href={`/products/${props.category_id}`} 
                onClick={(e) => redirect(history, { categoryId: props.category_id, productId: props.id })} className="block-title flex">
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