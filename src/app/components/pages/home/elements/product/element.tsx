import React from "react";
import { Link } from 'react-router-dom';

type ProductBlockTypes = {
    title: string,
    image: string,
    url: string,
    params: string
};

const imageUrl = (imageName: string) => {
    return `/static/assepts/images/${imageName}`;
};

const onMouseEnterHandle = (e: React.MouseEvent<HTMLAnchorElement>) => {
    document.querySelectorAll('.section-product .element').forEach((item: HTMLAnchorElement) => {
        if(item != e.currentTarget)
            item.classList.add('opacity')
    })
}

const onMouseLeaveHandle = (e: React.MouseEvent<HTMLAnchorElement>) => {
    document.querySelectorAll('.section-product .element').forEach((item: HTMLAnchorElement) => {
        item.classList.remove('opacity')
    })
}

const ProductBlock: React.FunctionComponent<ProductBlockTypes> = (props) => {
    return (
        <Link to={{
            pathname: props.url,
            search: props.params
        }} className="element" 
            onMouseEnter={onMouseEnterHandle}
            onMouseLeave={onMouseLeaveHandle}>
            <div className="bg" style={{ backgroundImage: `url(${imageUrl(props.image)})` }}></div>
            <div className="title">
                <span>{props.title}</span>
            </div>
        </Link>
    );
};

export default ProductBlock;
