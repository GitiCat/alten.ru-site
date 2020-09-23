type ClickHandleTypes = {
    active: boolean,
    toggleContainerClass: string,
    toggleButtonClass: string,
    panelClass: string
}

const changeTogglePosition: Function = ({ active, toggleContainerClass, toggleButtonClass, panelClass }: ClickHandleTypes) => {
    const container: HTMLElement = document.querySelector(`.${toggleContainerClass}`),
        toggle: SVGAElement = document.querySelector(`.${toggleButtonClass}`),
        panel: HTMLElement = document.querySelector(`.${panelClass}`);
    
    const defaultValue: string = '2%'

    if(active) {
        const newValue = getChangedTogglePosition({panel: panel, toggle: toggle})
        container.style.setProperty('--left-pos', `${newValue}%`)
    } else {
        container.style.setProperty('--left-pos', `${defaultValue}`)
    }
}

export default changeTogglePosition

type TogglePositionTypes = {
    toggle: SVGAElement,
    panel: HTMLElement
}

const getChangedTogglePosition = ({panel, toggle}: TogglePositionTypes): number => {
    let display: number = window.innerWidth,
        pw: number = panel.offsetWidth,
        tbw: number = toggle.clientWidth

    const moveOn = (pw + 1 - (tbw / 2)) / display * 100

    return moveOn
}