import React from 'react'

type LeadershipsManagerBlockType = {
    name: string,
    descriptor: string,
    responsible: string,
    position: string,
    phone: string,
    fax: string,
    email: string,
    isVisible: boolean,
    isPhoneVisible: boolean,
    isFaxVisible: boolean,
    isEmailVisible: boolean
}

const LeadershipsManagerBlock: React.FunctionComponent<LeadershipsManagerBlockType> = (props) => {
    return (
        <div className="leaderships-container-manager">
            
        </div>
    )
}

export default LeadershipsManagerBlock;