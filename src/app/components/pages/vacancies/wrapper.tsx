import React, { useState } from 'react'
import { IVacanciesTypes } from '../../../types/api-types'
import VacanciesItemComponent from './item'

type VacanciesWrapperComponentTypes = {
	data: Array<IVacanciesTypes>
}

const VacanciesWrapperComponent: React.FunctionComponent<VacanciesWrapperComponentTypes> = props => {
	const [checkedState, setCheckedState] = useState<Array<boolean>>(
		new Array(props.data.length).fill(false)
	)

	const onChangeInputHandler = (position: number) => {
		const updatedCheckedState: Array<boolean> = checkedState.map((item, index) => {
			if (index === position) {
				return !item
			}
			return false
		})

		setCheckedState(updatedCheckedState)
	}

	return (
		<div className="wrapper flex flex-dir-col">
			{
				props.data.map((item: IVacanciesTypes, index: number) =>
					<VacanciesItemComponent key={index}
						item={{
							id: index,
							title: item.title,
							wage: item.wage,
							city: item.city,
							employment: item.employment,
							descriptor: item.descriptor,
							created_at: item.created_at,
						}}
						isChecked={checkedState[index]}
						onChange={onChangeInputHandler} />
				)
			}
		</div>
	)
}

export default VacanciesWrapperComponent
