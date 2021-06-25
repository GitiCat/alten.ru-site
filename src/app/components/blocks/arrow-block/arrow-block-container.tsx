import React, { useEffect } from 'react'
import { initial } from './utils/arrow-block-container-initial'
import { ArrowBlockTypes } from './utils/types'

const ArrowBlockStyles = {
	position: 'absolute',
	display: 'block',
} as React.CSSProperties

const ArrowBlockContainer: React.FunctionComponent<ArrowBlockTypes> = props => {
	useEffect(() => {
		const root: HTMLDivElement = document.querySelector('.arrow-block-container')
		initial(root, props.isRevers, props.reversOrient)
	}, [])

	return (
		<div className="arrow-block-container flex flex-dir-col">
			<canvas width={700} height={1000} style={ArrowBlockStyles}></canvas>
			{props.children}
		</div>
	)
}

export default ArrowBlockContainer
