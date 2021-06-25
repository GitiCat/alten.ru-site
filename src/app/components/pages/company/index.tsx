import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ArrowBlockContainer from '../../blocks/arrow-block/arrow-block-container'
import { ReversOrient } from '../../blocks/arrow-block/utils/types'
import ParallaxContainer from '../../blocks/parallax/index'
import Header from '../../blocks/header/header'

const CompanyComponent: React.FunctionComponent = () => {
	useEffect(() => {
		document.title = 'Предприятие'
	})

	const getImageUrl = (name: string) => `/static/assepts/images/${name}`

	return (
		<div className='content company'>
			<Header title='Предприятие' subtitle='Вся доступная информация о нашем предприятии' />
			<article className='container'>
				<ParallaxContainer classes='img' depth={.5}>
					<ArrowBlockContainer stroke={true} isRevers={true} reversOrient={ReversOrient.Odd}>
						<div className="arrow-block flex">
							<picture>
								<img src={getImageUrl('leaderships.jpg')} />
							</picture>
							<div className="content">
								<header className='light'>
									<h2>Руководство</h2>
									<p>Руководство нашего предприятия</p>
								</header>
								<Link to='/company/leaderships' className='_outlined light'>Перейти</Link>
							</div>
						</div>
						<div className="arrow-block flex">
							<picture>
								<img src={getImageUrl('publications.jpg')} />
							</picture>
							<div className="content">
								<header className='light'>
									<h2>Публикации</h2>
									<p>Статьи и публикации предприятия</p>
								</header>
								<Link to='/company/publications' className='_outlined light'>Перейти</Link>
							</div>
						</div>
						<div className="arrow-block flex">
							<picture>
								<img src={getImageUrl('licences.jpg')} />
							</picture>
							<div className="content">
								<header className='light'>
									<h2>Лицензии</h2>
									<p>Документы, подтверждающие деятельность нашего предприятия</p>
								</header>
								<Link to='/company/licences' className='_outlined light'>Перейти</Link>
							</div>
						</div>
						<div className="arrow-block flex">
							<picture>
								<img src={getImageUrl('documents.jpg')} />
							</picture>
							<div className="content">
								<header className='light'>
									<h2>Документы</h2>
									<p>Общедоступные документы предприятия</p>
								</header>
								<Link to='/company/documents' className='_outlined light'>Перейти</Link>
							</div>
						</div>
						<div className="arrow-block flex">
							<picture>
								<img src={getImageUrl('gallery.jpg')} />
							</picture>
							<div className="content">
								<header className='light'>
									<h2>Галерея</h2>
									<p>Фотоальбомы предприятия</p>
								</header>
								<Link to='/company/gallery' className='_outlined light'>Перейти</Link>
							</div>
						</div>
					</ArrowBlockContainer>
				</ParallaxContainer>
			</article>
		</div>
	)
}

export default CompanyComponent
