import React from 'react';
import cn from 'classnames';

type LeadershipsItemTypes = {
    id: number,
    title: string,
    subtitle: string,
    text: string,
    image: {
        url: string,
        descriptor?: string
    }
}

const LeadershipsItem: React.FunctionComponent<LeadershipsItemTypes> = (props) => {
    const itemClassnames = cn({
        'item': true
    })

    return (
        <div className={itemClassnames}>
            <div className="profile">
                <div className="image" style={{backgroundImage: `url(${props.image.url})`}}/>
            </div>
            <div className="content">
                <div className="title">
                    <h2>{props.title}</h2>
                    <span>{props.subtitle}</span>
                </div>
                <div className="text" dangerouslySetInnerHTML={{__html: props.text}}/>
            </div>
        </div>
    )
}

export default React.memo(LeadershipsItem);