import React from 'react';

const toggleClickEvent = (event: React.MouseEvent<SVGElement>) => {
    event.currentTarget.classList.toggle('active');
}

const SideMenu: React.FunctionComponent = () => {
    return (
        <React.Fragment>
            <div className="toggle-container">
                <svg className="toggle" viewBox="0 0 100 100" width="45"
                    onClick={toggleClickEvent}>
                    <path className="line top"
                        d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"/>
                    <path className="line middle"
                        d="m 70,50 h -40"/>
                    <path className="line bottom"
                        d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"/>
                </svg>
            </div>
            <div className="side-menu">
                
            </div>
        </React.Fragment>
    )
}

export default SideMenu;