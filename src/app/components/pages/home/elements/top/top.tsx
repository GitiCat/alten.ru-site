import React, { useEffect } from 'react';
import ArrowDown from '@material-ui/icons/KeyboardArrowDown';
import Menu from '../../../../blocks/menu/menu';

const TopElement: React.FunctionComponent<any> = () => {

    useEffect(() => {
        document.getElementById('to-info').addEventListener('click', () => {
            document.querySelector('.container.info').scrollIntoView({
                behavior: "smooth",
                block: "center",
            })
        });
    })

    return (
        <div className="main-top">
            <div className="main-top--bg bg-cover"></div>
            <div className="main-top--title">
                <span>Акционерное общество</span>
                <span>Научно-производственный комплекс</span>
                <span>«Альтернативная Энергетика»</span>
                <hr />
                <span className="litle">Разработка и производство химических источников тока</span>
            </div>
            <div className="scroll-next">
                <div className="scroll-next--container" id='to-info'>
                    <ArrowDown />
                </div>
            </div>
        </div>
    )
}

export default TopElement;