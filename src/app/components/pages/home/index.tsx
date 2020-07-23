import React from 'react';
import Top from './elements/top/top';
import Info from './elements/info/info';
import Services from './elements/services/services';
import Products from './elements/product/index';
import Licences from './elements/licences/licences';
import News from './elements/news/news';

const HomeComponent : React.FunctionComponent<any> = props => {
    return (
        <div className="content">
            <Top/>
            <Info/>
            <Services/>
            <Products/>
            <Licences/>
            <News/>
        </div>
    )
}

export default HomeComponent;