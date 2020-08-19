import React from "react";
import { Link } from 'react-router-dom'

import ProductBlock from "./element";

const ProductElement: React.FunctionComponent = () => {
    return (
        <div className="container products">
            <div className="block">
                <div className="flex row">
                    <ProductBlock
                        title="Первичные источники тока"
                        image="300.jpg"
                        url="/products/primary-current-sources"
                    />
                    <ProductBlock
                        title="Литий-ионные аккумуляторы"
                        image="lion.jpg"
                        url="/products/rechargeable-batteries"
                    />
                </div>
                <ProductBlock
                    title="Зарядно/разрядные устройства"
                    image="zru.jpg"
                    url="/products/zru"
                />
            </div>
            <div className="block">
                <div className="title">
                    <h2>Продукция</h2>
                    <span>Категории продукции, выпускаемой на предприятии</span>
                </div>
                <div className="descriptor">
                    <p>
                        АО «НПК «АЛЬТЭН» располагает необходимым научным и 
                        практическим опытом в области разработки, производства и 
                        эксплуатации современных первичных и вторичных химических источников тока и 
                        электрохимических энергоустановок.
                    </p>
                </div>
                <Link className="light-link-1" to='/products'>Показать</Link>
            </div>
        </div>
    );
};

export default ProductElement;
