import React from 'react'
import cn from 'classnames'

type SideMenuTypes = {
	isShow: boolean
}

const SideMenu: React.FunctionComponent<SideMenuTypes> = props => {

	const sidemenuClasses: string = cn({
		'side-menu': true,
		'show': props.isShow,
		'pre-top': props.isShow,
	})

	return (
		<div className={sidemenuClasses}>
			{props.children}
		</div>
	)
}

export default SideMenu
