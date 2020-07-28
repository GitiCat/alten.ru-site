import React from 'react';

type HeaderTypes = {
    title: string,
    subtitle?: string,
    image_url?: string
}

const HeaderBlock: React.FunctionComponent<HeaderTypes> = (props) => {
    return (
        <header className='header' id='header'>
            { props.image_url != undefined &&
                <div className="image" style={{backgroundImage: `url(${props.image_url})`}}/>
            }
            <div className="container">
                <div className="title">
                    <h2>{props.title}</h2>
                    {props.subtitle != undefined &&
                        <span>{props.subtitle}</span>
                    }
                </div>
            </div>
        </header>
    )
}

export default React.memo(HeaderBlock);