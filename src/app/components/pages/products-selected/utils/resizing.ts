const setWindowResizeEvent = (current: boolean, changePrevType: Function) => {
    window.onload = () => changePreviewListType(current, changePrevType);
    window.addEventListener('resize', () => changePreviewListType(current, changePrevType))
}

const changePreviewListType = (current: boolean, changePrevType: Function) => {
    if(isScreenSizeTo(window.innerWidth, 1440)) {
        if(current === false)
            changePrevType(true)
    } else {
        changePrevType(false)
    }
}

const isScreenSizeTo = (current: number, needed: number): boolean => {
    if(current <= needed)
        return true

    return false
}

export {
    setWindowResizeEvent
}