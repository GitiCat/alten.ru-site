import React from 'react'
import cn from 'classnames'

type LeadershipsItemTypes = {
	isManaged: boolean
	name: string
	position: string
	phone: string
	email: string
	isPhoneVisible: boolean
	isEmailVisible: boolean
}

const PersonItem: React.FunctionComponent<LeadershipsItemTypes> = props => {
	const itemClasses = cn({
		'item flex flex-dir-row': true,
		'unmanaged': !props.isManaged,
	})

	return (
		<div className={itemClasses}>
			<div className="person">
				<div className="person--name">{props.name}</div>
				<p className="person--position">{props.position}</p>
			</div>
			{!props.isManaged &&
                <div className="contacts flex flex-dir-col">
                	{props.isPhoneVisible &&
                        props.phone !== null &&
                            <div className="contact">
                            	<span>Тел:</span>
                            	<a href={`tel:${props.phone}`}>{props.phone}</a>
                            </div>
                	}
                	{props.isEmailVisible &&
                        props.email !== null &&
                            <div className="contact">
                            	<span>Эл. почта: </span>
                            	<a href={`mail:${props.email}`}>{props.email}</a>
                            </div>
                	}
                </div>
			}
		</div>
	)
}

export default PersonItem
