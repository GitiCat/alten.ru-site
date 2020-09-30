import React, { useState } from 'react'
import parse from 'html-react-parser'
import cn from 'classnames'

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
    const [show, setShowState] = useState(false)
    const expandClasses = cn({
        'flex expand': true,
        'expanded': show
    })

    return (
        <div className='item leadership-item flex'>
            <div className="profile">
                <picture className="profile left">
                    <img src={props.image.url} alt={props.image.descriptor}
                        width='250px' height='325' />
                </picture>
            </div>
            <div className="content">
                <header>
                    <h2>{props.title}</h2>
                    <p>{props.subtitle}</p>
                    <hr/>
                </header>
                <article className="descriptor">
                    {parse(props.text)}
                </article>
                <div className={expandClasses} onClick={() => setShowState(!show)}>
                    <div className="circle flex">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                    </svg>
                    </div>
                    <div className="content">
                        {show ? 'Свернуть' : 'Развернуть'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(LeadershipsItem);