import React from 'react'
import { getClonedElemenets, getCalculateHeight } from '../base'
import { StyleElementTypes } from '../types'

const defatulProps: StyleElementTypes = {
    startIndex: 0,
    speed: 1,
    step: .7,
    nodes: null
}

const FadeComponent: React.FunctionComponent<StyleElementTypes> = (props = defatulProps) => {

    let elements: Array<React.ReactElement>;

    elements = getClonedElemenets({
        startIndex: props.startIndex,
        speed: props.speed,
        step: props.step,
        nodes: props.children
    })
    
    return (
        <React.Fragment>
            {elements}
        </React.Fragment>
    )
}

export default FadeComponent