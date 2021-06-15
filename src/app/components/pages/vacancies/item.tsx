import React from 'react'
import cn from 'classnames'
import parse from 'html-react-parser'
import { IVacanciesTypes } from '../../../types/api-types'

type VacanciesItemComponentTypes = {
    isChecked: boolean,
    onChange: Function
    item: IVacanciesTypes
}

const VacanciesItemComponent: React.FunctionComponent<VacanciesItemComponentTypes> = (props) => {
    const itemClasses = cn({
        'wrapper-list--item': true,
        'expanded': props.isChecked
    })

    return (
        <div className={itemClasses}>
            <input type="checkbox"
                name="wrapper-list--checkbox"
                id={`wrapper-list--checkbox__${props.item.id}`}
                checked={props.isChecked}
                onChange={() => props.onChange(props.item.id)} />
            <label htmlFor={`wrapper-list--checkbox__${props.item.id}`}>
                <header>
                    <h3>{props.item.title}</h3>
                </header>
                <div className="content">
                    <div className="line-info">
                        <span>З/п:</span>
                        <span>
                            {props.item.wage === null
                                ? 'не указана'
                                : props.item.wage.toLowerCase()
                            }
                        </span>
                    </div>
                    <div className="line-info">
                        <span>{props.item.city}</span>
                    </div>
                    <div className="line-info">
                        <span>График работы:</span>
                        <span>
                            {props.item.employment === null
                            
                            }
                        </span>
                    </div>
                </div>
            </label>
        </div>
    )
}

export default VacanciesItemComponent