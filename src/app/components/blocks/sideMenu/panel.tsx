import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames'

import {
    SET_SIDEMENU_ACTIVE_STATE,
    SET_SIDEMENU_DEACTIVE_STATE
} from '../../../store/sideMenu/types';

import SideMenu from './menu';
import SideMenuItems from './items';
import { BlackoutState } from '../blackout/blackout';

const changeTogglePosition = (isActive: boolean) => {
    const container: HTMLElement = document.querySelector('.toggle-container'),
        toggle: SVGAElement = document.querySelector('.toggle'),
        sidemenu: HTMLElement = document.querySelector('.side-menu');

    if(isActive) {
        const display = window.innerWidth;
        const cw = sidemenu.offsetWidth;
        const tw = toggle.clientWidth;

        const moveOn = (cw + 1 - (tw / 2)) / display * 100;

        container.style.setProperty('--left-pos', `${moveOn}%`);
    }
    else {
        container.style.setProperty('--left-pos', `3%`);
    }
}

const changeSidemenuState = ( isActive: boolean, dispatch: Dispatch) => {
    if(!isActive) {
        dispatch({
            type: SET_SIDEMENU_ACTIVE_STATE
        })
        changeTogglePosition(true);
        BlackoutState(true);
    }
    else {
        dispatch({
            type: SET_SIDEMENU_DEACTIVE_STATE
        })
        changeTogglePosition(false)
        BlackoutState(false);
    }
}

const toggleHandle = (isActive: boolean, dispatch: Dispatch) => {
    changeSidemenuState(isActive, dispatch);
}

const SidePanel: React.FunctionComponent = () => {
    const store: any            = useSelector(store => store);
    const dispatch: Dispatch    = useDispatch()

    const isActive: boolean       = store?.sidemenu?.isActive;
    const toggleClasses: string   = cn({
        'toggle': true,
        'active': store?.sidemenu?.isActive
    })

    useEffect(() => {
        document.onmouseup = (event: MouseEvent) => {
            if(isActive) {
                const element: HTMLElement    = document.querySelector('.side-menu');
                const items: HTMLElement      = document.querySelector('.side-menu--items');
                const toggle: HTMLElement     = document.querySelector('.toggle');
                const target                  = event.target;

                target !== element
                    ? target !== toggle
                        ? target !== items
                            ? changeSidemenuState(isActive, dispatch)
                            : false
                        : false
                    : false
            }
        }

        window.onresize = () => {
            changeTogglePosition(isActive);
        }
    })

    return (
        <React.Fragment>
            <div className="toggle-container">
                <svg className={toggleClasses} viewBox="0 0 100 100" width="45"
                    onClick={() => toggleHandle(isActive, dispatch)}>
                    <path className="line top"
                        d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"/>
                    <path className="line middle"
                        d="m 70,50 h -40"/>
                    <path className="line bottom"
                        d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"/>
                </svg>
            </div>
            <SideMenu isShow={isActive}>
                <SideMenuItems/>
            </SideMenu>
        </React.Fragment>
    )
}

export default SidePanel;