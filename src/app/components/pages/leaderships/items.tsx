import React, { useState } from 'react'
import parse from 'html-react-parser'
import cn from 'classnames'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Fade from '../../Animations/Fade/Fade'

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
                    <Fade startIndex={1} speed={300} step={.7}>
                        {parse(props.text)}
                    </Fade>
                </article>
                <div className={expandClasses} onClick={() => setShowState(!show)}>
                    <div className="circle flex">
                        <ExpandMoreIcon />
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