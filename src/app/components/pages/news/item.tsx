import React from 'react'
import { Link } from 'react-router-dom'

type NewsItemTypes = {
	id: number
	title: string
	subtitle: string
	text: string
	img: {
		url: string
	}
	date: string
	is_new: boolean
}

const NewsItem: React.FunctionComponent<NewsItemTypes> = props =>
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
						<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
							<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
						</svg>
						{props.date}
					</span>
					{props.is_new &&
                            <span className="new flex">
                            	<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            		<path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"></path>
                            	</svg>
                                Новое
                            </span>
					}
				</div>
			</div>
		</div>
	</section>


export default React.memo(NewsItem)
