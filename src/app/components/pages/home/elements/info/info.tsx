import React from 'react';
import { Link } from 'react-router-dom';

const InfoElement: React.FunctionComponent<any> = () => {
    return (
        <section className="container flex">
            <div className="flex-block-1">
                <ul className="number-list">
                    <li className="flex">
                        <span>1</span>
                        <span>Источники тока для питания бортовых систем средств выведения космических аппаратов</span>
                    </li>
                    <li className="flex">
                        <span>2</span>
                        <span>Источники тока для питания наземной аппаратуры ракетных комплексов</span>
                    </li>
                    <li className="flex">
                        <span>3</span>
                        <span>Источники тока для питания морской техники</span>
                    </li>
                    <li className="flex">
                        <span>4</span>
                        <span>Авиационные аккумуляторные батареи</span>
                    </li>
                    <li className="flex">
                        <span>5</span>
                        <span>Устройства обслуживания и встроенных систем самодиагностики аккумуляторных батарей</span>
                    </li>
                </ul>
            </div>
            <div className="flex-block-1">
                <header>
                    <h2>АО «НПК «АЛЬТЭН»</h2>
                </header>
                <article className="descriptor">
                    <p>
                        Это современное, динамично развивающееся предприятие, располагающее высококвалифицированным
                        персоналом и мощной производственной базой, которые обеспечивают отличное качество и надежность при разработке и выпуске
                        химических источникой тока и устройств для их обслуживания и диагностики.
                    </p>
                </article>
                <Link to='/activity' className='_contained dark'>Перейти</Link>
            </div>
        </section>
    )
}

export default InfoElement;