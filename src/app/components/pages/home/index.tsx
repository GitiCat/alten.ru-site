import React from 'react';
import Top from './elements/top';
import Info from './elements/info';
import Services from './elements/services';

const HomeComponent : React.FunctionComponent<any> = props => {
    return (
        <div className="content">
            <Top/>
            <Info/>
            <Services/>
        </div>
    )
}

export default HomeComponent;