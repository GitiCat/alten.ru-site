import React, { useEffect } from 'react';
import ArrowDown from '@material-ui/icons/KeyboardArrowDown';

const TopElement: React.FunctionComponent<any> = () => {

    useEffect(() => {
        document.getElementById('to-info').addEventListener('click', () => {
            document.querySelector('section').scrollIntoView({
                behavior: "smooth",
                block: "center",
            })
        });
    })

    return (
        <div className="main-top flex">
            <div className="main-top--bg bg-cover"></div>
            <header className="main-top--title light">
                <h2>Акционерное общество</h2>
                <h2>Научно-производственный комплекс</h2>
                <h1>«Альтернативная Энергетика»</h1>
                <hr />
                <h4>Разработка и производство химических источников тока</h4>
            </header>
            <div className="scroll-next">
                <div className="scroll-next--container flex" id='to-info'>
                    <ArrowDown />
                </div>
            </div>
        </div>
    )
}

export default TopElement;