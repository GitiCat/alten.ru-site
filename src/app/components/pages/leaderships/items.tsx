import React from 'react'
import parse from 'html-react-parser'
import { Link } from 'react-router-dom'

type LeadershipsItemTypes = {
    id: number,
    title: string,
    subtitle: string,
    text: string,
    image: {
        url: string,
        descriptor?: string
    },
    classList: string,
    isPreview: boolean
}

const LeadershipsItem: React.FunctionComponent<LeadershipsItemTypes> = (props) => {
    return (
        <div className={props.classList}>
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
                {props.isPreview 
                    ? <Link to={`/company/leaderships/${props.id}`} className='_contained dark'>Перейти</Link>
                    : <Link to={`/company/leaderships`} className='_contained dark'>Вернуться</Link>
                }
            </div>
        </div>
    )
}

export default React.memo(LeadershipsItem);