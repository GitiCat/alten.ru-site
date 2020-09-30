import React, { useEffect } from 'react';

const CompanyComponent: React.FunctionComponent = () => {
    useEffect(() => {
        document.title = 'Предприятие'
    })
    
    return (
        <div className='content'></div>
    )
}

export default CompanyComponent;