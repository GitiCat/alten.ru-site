import React, { useEffect } from 'react';
import Top from './elements/top/top';
import Info from './elements/info/info';
import Services from './elements/services/services';
import Products from './elements/product/index';
import Licences from './elements/licences/licences';
import News from './elements/news/news';
import Feedback from './elements/feedback/index';

const HomeComponent : React.FunctionComponent = () => {

    useEffect(() => {
        var ymapScript: HTMLScriptElement = document.createElement('script')
        ymapScript.type = 'text/javascript'
        ymapScript.src = '/scripts/yandex-maps-init.js'

        document.body.appendChild(ymapScript)
    }, [])

    return (
        <div className="content">
            <Top/>
            <Info/>
            <Services/>
            <Products/>
            <Licences/>
            <News/>
            <Feedback/>
        </div>
    )
}

export default HomeComponent;