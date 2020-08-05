const setItemTransition = (
    beginWith: string, 
    parentNode: HTMLElement, 
    contentNode: string, 
    elCalcHeight: string,
    step: number) => {

    const setTransitionInElemenet = (el: HTMLElement, step: number) => {
        el.style.transition = `transform .3s ease ${step}s, opacity .3s ease ${step}s, color .3s ease`
    }
    
    const calcElements = parentNode.querySelectorAll(`.${contentNode} ${elCalcHeight}`)
    var start: number = 0

    if(beginWith === 'start') start = step
    else if(beginWith === 'end') start = step * calcElements.length

    Array.from(calcElements).forEach((el: Element) => {
        switch (beginWith) {
            case 'start':
                setTransitionInElemenet(el as HTMLElement, start)
                start += step
                break;
    
            case 'end':
                setTransitionInElemenet(el as HTMLElement, start)
                start -= step
                break;
            default:
                throw new Error('[FN] Set Elemenet Transition: The starting point was not set...')
        }
    })
}

const setItemHeight = (
    parentNode: HTMLElement, 
    expandClass: string, 
    search: string, 
    defaultHeight: number) => {

    if(parentNode.classList.contains(`${expandClass}`)) {
        var allHeight: number = parentNode.getBoundingClientRect().height

        Array.from(parentNode.querySelectorAll(`.${search}`)).forEach((item, index) => {
            if(index == 0)
                return

            allHeight += item.getBoundingClientRect().height
        })
        allHeight += 15;
        parentNode.style.height = `${allHeight}px`
    }
    else
        parentNode.style.height = `${defaultHeight}px`
}

export {
    setItemTransition,
    setItemHeight
}