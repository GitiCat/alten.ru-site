import React from 'react';

type LicenceseItemTypes = {
    title: string,
    subtitle: string,
    text: string
    image: {
        url: string,
        descriptor?: string
    }
}

const LicencesItem: React.FunctionComponent<LicenceseItemTypes> = (props) => {
    return (
        <div className="item">
            <div className="profile">
                <picture>
                    <img src={props.image.url} alt={props.image.descriptor}
                        width='300px' height='450px'/>
                </picture>
            </div>
            <div className="content">
                <div className="middle-title hr">
                    <h3>{props.title}</h3>
                    <span>{props.subtitle}</span>
                </div>
                <div className='text nohide' dangerouslySetInnerHTML={{__html: props.text}}/>
            </div>
        </div>
    )
}

export default LicencesItem