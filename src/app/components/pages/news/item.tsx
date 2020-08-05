import React from 'react'
import { Link } from 'react-router-dom'
import ScheduleIcon from '@material-ui/icons/Schedule';
import WhatshotIcon from '@material-ui/icons/Whatshot';

type NewsItemTypes = {
    id: number,
    title: string,
    subtitle: string,
    text: string
    img: {
        url: string
    },
    date: string,
    is_new: boolean
}

const NewsItem: React.FunctionComponent<NewsItemTypes> = (props) => {
    return (
        <div className="news-item flex">
            <picture>
                <img src={props.img.url} alt="" width='270' height='200' />
            </picture>
            <div className="context flex flex-col">
                <div className="title">
                    <h2>{props.title}</h2>
                    {props.subtitle !== null &&
                        <span>{props.subtitle}</span>
                    }
                </div>
                <div className="descriptor pre">
                    <div className="text" dangerouslySetInnerHTML={{ __html: props.text }} />
                    <Link to={`/news/${props.id}`} className='light-link-1 '>Перейти</Link>
                    <div className="date flex">
                        <span className='flex'>
                            <ScheduleIcon />
                            {props.date}
                        </span>
                        {props.is_new &&
                            <span className="new flex">
                                <WhatshotIcon />
                                Новое
                            </span>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(NewsItem);