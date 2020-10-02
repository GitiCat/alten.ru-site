import React, { useEffect } from 'react';

const TopElement: React.FunctionComponent<any> = () => {

    useEffect(() => {
        document.getElementById('to-info').addEventListener('click', () => {
            document.querySelector('section').scrollIntoView({
                behavior: "smooth",
                block: "center",
            })
        });

        return () => {
            document.getElementById('to-info').removeEventListener('click', () => {})
        }
    })

    return (
        <div className="main-top flex">
            <div className="main-top--bg bg-cover" style={{backgroundImage: `url(/static/assepts/images/home-top.jpg)`}}></div>
            <header className="main-top--title light">
                <h2>Акционерное общество</h2>
                <h2>Научно-производственный комплекс</h2>
                <h1>«Альтернативная Энергетика»</h1>
                <h4>Разработка и производство химических источников тока</h4>
            </header>
            <div className="scroll-next">
                <div className="scroll-next--container flex" id='to-info'>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path>
                </svg>
                </div>
            </div>
        </div>
    )
}

export default TopElement;