import React from 'react';
import { Helmet } from 'react-helmet';

const CompanyComponent: React.FunctionComponent = () => {
    return (
        <div className='content'>
            <Helmet>
                <title>Предприятие</title>
            </Helmet>
        </div>
    )
}

export default CompanyComponent;