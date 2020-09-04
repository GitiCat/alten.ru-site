import React from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'

type CategoryProductItemTypes = {
    title: string,
    image_url: string,
    category_id: number,
    product_id: number
}

const categoryURL = (id: number): string => {
    switch(id) {
        case 3:
            return 'primary-current-sources'
        case 2:
            return 'rechargeable-batteries'
        case 1:
            return 'zru'
    }
}

const CategoryProductItem: React.FunctionComponent<CategoryProductItemTypes> = (props) => {
    const imgClasses = cn({
        'img': true,
        'no-image': props.image_url == null ? true : false
    })

    return (
        <div className="item products-list-item">
            <div className={imgClasses} style={{ backgroundImage: props.image_url == null ? '' : 'url(' + props.image_url + ')' }}></div>
            <Link to={{
                pathname: `/products/${categoryURL(props.category_id)}`,
                search: `?category=${props.category_id}&product=${props.product_id}`
            }}
                className="block-title flex">
                <h3>{props.title}</h3>
                <svg width="45" height="45" viewBox="0 0 45 45">
                    <rect rx='50' ry='50' x='2.5' y='2.5' />
                    <g>
                        <path id='path1' d='M24,28l5-5-5-5' />
                        <path id='path2' d='M17,28l5-5-5-5' />
                    </g>
                </svg>
            </Link>
        </div>
    )
}

export default CategoryProductItem