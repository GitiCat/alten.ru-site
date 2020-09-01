import React from 'react';
import CategoryProductItem from './item'

type CategoryProductBlockTypes = {
    id: number,
    title: string,
    descriptor: string,
    items: []
}

const CategoryProductBlock: React.FunctionComponent<CategoryProductBlockTypes> = (props) => {
    return (
        <div className="products-category-block">
            <div className="middle-title">
                <h3>{props.title}</h3>
                <span dangerouslySetInnerHTML={{__html: props.descriptor}}></span>
            </div>
            <div className="list flex flex-wrap">
                {props.items.length !== 0 ?
                    props.items.map((item: {}, index: number) => {
                        const image: string | null = item['image'] == null ? null : item['image']['image']
                        
                         return (
                             <CategoryProductItem key={index}
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