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
                <div className="i-title">
                    <h2>{props.title}</h2>
                    {props.subtitle != null &&
                        <span>{props.subtitle}</span>
                    }
                </div>
                <div className="text" dangerouslySetInnerHTML = {{__html: props.text}}></div>
                <Link to={`/news/${props.id}`} className='list-item-link-1'>Перейти</Link>
            </div>
        </div>
    )
}

export default NewsItem;