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
        <section className="news-item flex item-section">
            <picture className="profile left">
                <img src={props.img.url} alt="" width='300' height='230' />
            </picture>
            <div className="context flex flex-dir-col">
                <header className="title">
                    <h4>{props.title}</h4>
                    {props.subtitle !== null &&
                        <p>{props.subtitle}</p>
                    }
                </header>
                <div className="descriptor pre">
                    <div className="text" dangerouslySetInnerHTML={{ __html: props.text }} />
                    <Link to={`/news/${props.id}`} className='_contained dark'>Перейти</Link>
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
        </section>
    )
}

export default React.memo(NewsItem);