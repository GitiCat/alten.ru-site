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
        <div className="item licences-item flex">
            <div className="profile left">
                <picture>
                    <img src={props.image.url} alt={props.image.descriptor}
                        width='300px' height='450px'/>
                </picture>
            </div>
            <article className="content">
                <header>
                    <h2>{props.title}</h2>
                    <p>{props.subtitle}</p>
                    <hr/>
                </header>
                <div className='text nohide' dangerouslySetInnerHTML={{__html: props.text}}/>
            </article>
        </div>
    )
}

export default LicencesItem