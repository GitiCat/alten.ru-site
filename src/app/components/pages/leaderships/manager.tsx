import React from 'react'
import cn from 'classnames'
import parse from 'html-react-parser'
import PersonItem from './item'

type LeadershipsManagerBlockType = {
	descriptor: string
	responsible: string
	position: string
	phone: string
	fax: string
	email: string
	isVisible: boolean
	isPhoneVisible: boolean
	isFaxVisible: boolean
	isEmailVisible: boolean
	personnels: Array<[string, string | boolean]>
}

const LeadershipsManagerBlock: React.FunctionComponent<LeadershipsManagerBlockType> = props => {
	const personnelsClassList = cn({
		'personnels-block': true,
		'managed': props.isVisible,
	})

	return (
		<div className="leaderships-container-manager flex flex-dir-col">
			{props.isVisible &&
                <div className="manager-block">
                	<div className="manager-block--title">
                		{parse(props.descriptor)}
                		<h3>{props.responsible}</h3>
                		<span>{props.position}</span>
                	</div>
                	<div className="manager-block--contacts">
                		{props.isPhoneVisible && props.phone !== null &&
                            <div className="contact flex flex-dir-row">
                            	<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            		<path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                            	</svg>
                            	<span>Телефон:</span>
                            	<a href={`tel:${props.phone}`}>{props.phone}</a>
                            </div>
                		}
                		{props.isFaxVisible && props.fax !== null &&
                            <div className="contact flex flex-dir-row">
                            	<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            		<path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                            	</svg>
                            	<span>Телефон / факс:</span>
                            	<a href={`tel:${props.fax}`}>{props.fax}</a>
                            </div>
                		}
                		{props.isEmailVisible && props.email !== null &&
                            <div className="contact flex flex-dir-row">
                            	<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            		<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
                            	</svg>
                            	<span>Эл. почта:</span>
                            	<a href={`mailto:${props.email}`}>{props.email}</a>
                            </div>
                		}
                	</div>
                </div>
			}
			<div className={personnelsClassList}>
				{
					props.personnels.map((item, index) =>
						<PersonItem key={index}
							isManaged={props.isVisible}
							name={item['name']}
							position={item['position']}
							phone={item['phone']}
							email={item['email']}
							isPhoneVisible={item['is_phone_visible']}
							isEmailVisible={item['is_email_visible']}/>
					)
				}
			</div>
		</div>
	)
}

export default LeadershipsManagerBlock
