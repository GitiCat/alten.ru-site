import React from 'react'

let slider: Element,
    sliderList: Element,
    sliderTrack: Element,
    sliderTrackItems: Array<Element>,
    isMouseDown: boolean = false,
    startMoving: number = 0,
    movingPosition: number = 0,
    currentPosition: number = 0

const InitialSliderUtils = () => {
    slider = document.querySelector('.product-selected--slider')
    sliderList = document.querySelector('.product-selected--slider .slider--list')
    sliderTrack = document.querySelector('.product-selected--slider .slider--list .slider--track')
    sliderTrackItems = Object.assign([], sliderTrack.querySelectorAll('.slider-item'))
}

const onMouseDownEventHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    startMoving = e.clientX
    isMouseDown = true
    setPointerEvents(isMouseDown)
}

const onMouseUpEventHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    currentPosition = movingPosition
    startMoving = 0
    isMouseDown = false
    setPointerEvents(isMouseDown)
}

const onMouseMoveEventHandle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isMouseDown) {
        movingPosition = currentPosition + (e.clientX - startMoving)

        if(-movingPosition >= 0) {
            translateTrack(movingPosition)
        }
    }
}

const translateTrack = (position: number) => {
    sliderTrack.setAttribute('style', `
        transform: translateX(${position}px);
    `)
}

const setPointerEvents = (isMouseDown: boolean) => {
    sliderTrackItems.forEach((item: Element) => {
        isMouseDown
            ? item.querySelector('label').classList.add('events-block')
            : item.querySelector('label').classList.remove('events-block')
    })
}

export {
    InitialSliderUtils,
    onMouseMoveEventHandle,
    onMouseDownEventHandler,
    onMouseUpEventHandler
}