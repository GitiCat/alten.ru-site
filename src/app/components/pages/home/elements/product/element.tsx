import React from "react";

type ProductBlockTypes = {
    title: string,
    image: string,
    url: string
};

const imageUrl = (imageName: string) => {
    return `/images/${imageName}`;
};

const redirect = (url: string) => {
    
}

const onMouseEnterHandle = (e: React.MouseEvent<HTMLDivElement>) => {
    document.querySelectorAll('.container.products .element').forEach((item: HTMLDivElement) => {
        if(item != e.currentTarget)
            item.classList.add('opacity')
    })
}

const onMouseLeaveHandle = (e: React.MouseEvent<HTMLDivElement>) => {
    document.querySelectorAll('.container.products .element').forEach((item: HTMLDivElement) => {
        item.classList.remove('opacity')
    })
}

const ProductBlock: React.FunctionComponent<ProductBlockTypes> = (props) => {
    return (
        <div className="element" 
            onMouseEnter={onMouseEnterHandle}
            onMouseLeave={onMouseLeaveHandle}
            onClick={(e) => redirect(props.url)}>
            <div className="bg" style={{ backgroundImage: `url(${imageUrl(props.image)})` }}></div>
            <div className="title">
                <span>{props.title}</span>
            </div>
        </div>
    );
};

export default ProductBlock;
