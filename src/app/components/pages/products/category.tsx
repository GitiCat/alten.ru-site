import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import parse from 'html-react-parser'
import CategoryProductItem from './item'
import { UPDATE_PRODUCT } from '../../../redux/store/products-selected/types';

type CategoryProductBlockTypes = {
    id: number,
    title: string,
    descriptor: string,
    items: []
}

const CategoryProductBlock: React.FunctionComponent<CategoryProductBlockTypes> = (props) => {
    const dispatch: Dispatch<any> = useDispatch()

    const styles = {
        header: {
            maxWidth: '75%'
        } as React.CSSProperties
    }

    return (
        <div className="products-category-block">
            <header style={styles.header}>
                <h2>{props.title}</h2>
                {props.descriptor != null &&
                    parse(props.descriptor)
                }
                <Link className='_contained dark'
                    to={`/products/${props.id}`}
                    style={{ margin: '10px 0px' }}
                    onClick={() => {
                        dispatch({ type: UPDATE_PRODUCT, payload: {
                            categoryId: props.id,
                            productId: 0
                        }})
                    }}>
                Перейти к категории</Link>
            </header>
            <div className="list flex flex-wrap">
                {props.items.length !== 0 ?
                    props.items.map((item: {}, index: number) => {
                        const image: string | null = item['image'] == null ? null : item['image']['image']

                        return (
                            <CategoryProductItem key={index}
                                id={index}
                                title={item['title']}
                                image_url={image}
                                category_id={props.id}
                                product_id={index}
                            />
                        )
                    })
                    :
                    <div></div>
                }
            </div>
        </div>
    )
}

export default CategoryProductBlock