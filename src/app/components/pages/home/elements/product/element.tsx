import React from "react";
import { Link } from "react-router-dom";

type ProductBlockTypes = {
    title: string;
    image: string;
    url: string;
};

const imageUrl = (imageName: string) => {
    return `/images/${imageName}`;
};

const ProductBlock: React.FunctionComponent<ProductBlockTypes> = (props) => {
    return (
        <div className="element">
            <div
                className="bg"
                style={{
                    backgroundImage: 'url("' + imageUrl(props.image) + '")',
                }}
            ></div>
            <div className="context">
                <span>{props.title}</span>
                <Link to={props.url}>Перейти</Link>
            </div>
            <div className="hover-bl">
                
            </div>
        </div>
    );
};

export default ProductBlock;
