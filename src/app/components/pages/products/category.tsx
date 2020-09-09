import React from 'react';
import parse from 'html-react-parser'
import CategoryProductItem from './item'

type CategoryProductBlockTypes = {
    id: number,
    title: string,
    descriptor: string,
    items: []
}

const CategoryProductBlock: React.FunctionComponent<CategoryProductBlockTypes> = (props) => {
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
            </header>
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