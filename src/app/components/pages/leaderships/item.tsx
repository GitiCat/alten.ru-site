import React from 'react'

type LeadershipsItemTypes = {
    name: string,
    position: string,
    phone: string,
    email: string
}

const LeadershipsItem: React.FunctionComponent<LeadershipsItemTypes> = (props) => {
    return (
        <div className="item flex flex-dir-row">
            <div className="person">
                <div className="person-name">{props.name}</div>
                <p className="person-position">{props.position}</p>
            </div>
            <div className="contacts">
                {props.phone !== null && <span className='person-phone'>Тел: {props.phone}</span>}
                {props.email !== null && <span className='person-email'>Эл. почта: {props.email}</span>}
            </div>
        </div>
    )
}

export default LeadershipsItem;