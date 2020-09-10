import React from 'react'
import { 
    StyleChangeTypes,
    StyleElementTypes
} from './types'

const getElementWithStyleChange = ({ element, style } : StyleChangeTypes) : React.ReactElement => {
    let clone: React.ReactElement = null
    clone = React.cloneElement(element, {style: style}, element?.props?.children)

    return clone
}

const getClonedElemenets = ({ startIndex, speed, step, nodes } : StyleElementTypes) : Array<React.ReactElement> => {
    let arr: Array<React.ReactElement> = [],
        delay: number = step

    const nodeArr: Array<React.ReactElement> = Array.of(nodes)[0] as Array<React.ReactElement>

    nodeArr.map((node, index) => {
        if(typeof node === "string")
            return
        
        let style = {
            transition: `transform ${speed}s ease`,
            transitionDelay: `${delay}s`
        } as React.CSSProperties

        let styleIf = index < startIndex ? null : style
        
        arr.push(getElementWithStyleChange({element: node, style: styleIf}))
        delay += index < startIndex ? 0 : step
    })
    
    return arr
}

const getCalculateHeight = (nodes: Array<HTMLElement>, startIndex: number): number => {
    let calc: number = 0;

    nodes.map((node, index) => {
        if(index < startIndex) return

        calc += node.offsetHeight
    })
    
    return calc
}

export {
    getClonedElemenets,
    getCalculateHeight
}