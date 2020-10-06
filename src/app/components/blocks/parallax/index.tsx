import React, { useEffect, useRef } from 'react'
import { initialParallax } from './parallax-funcs'

type ParallaxContainerTypes = {
    classes: string
    depth: number | number[]
}

const ParallaxContainer: React.FunctionComponent<ParallaxContainerTypes> = (props) => {
    const ref = useRef()
    
    useEffect(() => {
        initialParallax(ref.current, props.classes, props.depth)
    }, [])
    
    return (
        <div className="parallax" ref={ref}>
            {props.children}
        </div>
    )
} 

export default ParallaxContainer