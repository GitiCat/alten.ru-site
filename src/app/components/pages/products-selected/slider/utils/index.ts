import React from 'react'

const slider: Element = document.querySelector('.product-selected--slider'),
      sliderList: Element = document.querySelector('.product-selected--slider .slider--list'),
      sliderTrack: Element = document.querySelector('.product-selected--slider .slider--list .slider--track')

const onMouseDownEventHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(e.clientX);
}

const onMouseUpEventHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

}
    
const onMouseMoveEventHandle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

}

export {
    onMouseMoveEventHandle,
    onMouseDownEventHandler,
    onMouseUpEventHandler
}