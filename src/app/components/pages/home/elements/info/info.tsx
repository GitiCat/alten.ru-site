import React from 'react';
import { Link } from 'react-router-dom';

const InfoElement: React.FunctionComponent<any> = () => {
    return (
        <div className="container info">
            <div className="block">
                <ul className="number-list">
                    <li>
                        <span>1</span>
                        <span>Источники тока для питания бортовых систем средств выведения космических аппаратов</span>
                    </li>
                    <li>
                        <span>2</span>
                        <span>Источники тока для питания наземной аппаратуры ракетных комплексов</span>
                    </li>
                    <li>
                        <span>3</span>
                        <span>Источники тока для питания морской техники</span>
                    </li>
                    <li>
                        <span>4</span>
                        <span>Авиационные аккумуляторные батареи</span>
                    </li>
                    <li>
                        <span>5</span>
                        <span>Устройства обслуживания и встроенных систем самодиагностики аккумуляторных батарей</span>
                    </li>
                </ul>
            </div>
            <div className="block">
                <div className="big-title">
                    <h2>Кто мы?</h2>
                    <span>Коротко о том, что Вам нужно знать</span>
                </div>
                <div className="descriptor">
                    <p>
                        АО «НПК «АЛЬТЭН» - это современное, динамично развивающееся предприятие, располагающее высококвалифицированным
                        персоналом и мощной производственной базой, которые обеспечивают отличное качество и надежность при разработке и выпуске
                        химических источникой тока и устройств для их обслуживания и диагностики.
                    </p>
                </div>
                <Link to='/activity' className='light-link-1'>Подробнее</Link>
            </div>
        </div>
    )
}

export default InfoElement;