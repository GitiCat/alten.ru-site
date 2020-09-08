import React from 'react';
import { Link } from 'react-router-dom';

type NewsItemTypes = {
    id: number
    title: string,
    subtitle: string,
    text: string,
    mainImage: string,
    createdAt: Date
}

const NewsItem: React.FunctionComponent<NewsItemTypes> = (props) => {
    return (
        <div className="h-list--item">
            <div className="image" style={{ backgroundImage: 'url(' + props.mainImage + ')' }}></div>
            <div className="context">
                <div className="date">{props.createdAt}</div>
                <header className="card-header">
                    <h4>{props.title}</h4>
                    {props.subtitle != null &&
                        <span>{props.subtitle}</span>
                    }
                </header>
                <div className="text card-descriptor" dangerouslySetInnerHTML = {{__html: props.text}}></div>
                <Link to={`/news/${props.id}`} className='_action'>Показать</Link>
            </div>
        </div>
    )
}

export default NewsItem;