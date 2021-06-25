import React from 'react'

const DataPreloaderBlock = () =>
	<div className='data-preloader__container flex'>
		<div className="data-preloader"></div>
		<svg>
			<defs>
				<filter id='goo'>
					<feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
					<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
					<feComposite in="SourceGraphic" in2="goo" operator="atop" />
				</filter>
			</defs>
		</svg>
	</div>


export default DataPreloaderBlock
