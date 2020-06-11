import React from "react";

import ProductBlock from "./element";

const ProductElement: React.FunctionComponent = () => {
    return (
        <div className="container products">
            <div className="block">
                <ProductBlock
                    title="Первичные источники тока"
                    image="300.jpg"
                    url=""
                />
                <ProductBlock
                    title="Литий-ионные аккумуляторы"
                    image="lion.jpg"
                    url=""
                />
                <ProductBlock
                    title="Зарядно/разрядные устройства"
                    image="zru.jpg"
                    url=""
                />
            </div>
            <div className="block">
                <div className="title">
                    <h2>Продукция</h2>
                    <span>Категории продукции, выпускаемой на предприятии</span>
                </div>
            </div>
        </div>
    );
};

export default ProductElement;
