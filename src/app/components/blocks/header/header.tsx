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
                <header className="title">
                    <h1>{props.title}</h1>
                    {props.subtitle != undefined &&
                        <p>{props.subtitle}</p>
                    }
                </header>
            </div>
        </header>
    )
}

export default React.memo(HeaderBlock);