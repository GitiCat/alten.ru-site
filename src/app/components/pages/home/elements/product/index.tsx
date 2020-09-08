import React from "react";
import { Link } from 'react-router-dom'

import ProductBlock from "./element";

const ProductElement: React.FunctionComponent = () => {
    return (
        <section className="container section-product flex">
            <div className="flex-block-1">
                <div className="flex row">
                    <ProductBlock
                        title="Первичные источники тока"
                        image="300.jpg"
                        url="/products/primary-current-sources"
                        params="?category=3&product=0"
                    />
                    <ProductBlock
                        title="Литий-ионные аккумуляторы"
                        image="lion.jpg"
                        url="/products/rechargeable-batteries"
                        params="?category=2&product=0"
                    />
                </div>
                <ProductBlock
                    title="Зарядно/разрядные устройства"
                    image="zru.jpg"
                    url="/products/zru"
                    params="?category=1&product=0"
                />
            </div>
            <div className="flex-block-1">
                <header>
                    <h2>Продукция</h2>
                    <p>Категории продукции, выпускаемой на предприятии</p>
                </header>
                <article className="descriptor">
                    <p>
                        АО «НПК «АЛЬТЭН» располагает необходимым научным и 
                        практическим опытом в области разработки, производства и 
                        эксплуатации современных первичных и вторичных химических источников тока и 
                        электрохимических энергоустановок.
                    </p>
                </article>
                <Link className="_contained dark" to='/products'>Перейти</Link>
            </div>
        </section>
    );
};

export default ProductElement;
