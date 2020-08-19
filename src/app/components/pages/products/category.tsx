import React from 'react';

type CategoryProductBlockTypes = {
    title: string,
    descriptor: string,
    items: [],
    titleClasses: string
}

const CategoryProductBlock: React.FunctionComponent<CategoryProductBlockTypes> = (props) => {
    return (
        <div className="category-block">
            <div className={props.titleClasses}>
                <h2>{props.title}</h2>
                {props.descriptor != null || props.descriptor != '' &&
                    <span>{props.descriptor}</span>
                }
            </div>
            <div className="list">
                
            </div>
        </div>
    )
}

export default CategoryProductBlock