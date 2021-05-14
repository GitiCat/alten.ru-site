import React from 'react'
import cn from 'classnames'

export enum InformationType {
    Info,
    Warning,
    Error
}

type InformationBlockTypes = {
    string: string,
    type: InformationType
}

const InformationBlock: React.FunctionComponent<InformationBlockTypes> = (props) => {
    const infoBlockClasses = cn({
        'flex': true,
        'flex-dir-col': true,
        'information-block--container': true,
        'block--info': props.type === InformationType.Info,
        'block--warning': props.type === InformationType.Warning,
        'block--error': props.type === InformationType.Error
    })

    return (
        <div className={infoBlockClasses}>
            <span>{props.string}</span>
        </div>
    )
}

export default InformationBlock