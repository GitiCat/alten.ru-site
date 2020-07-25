import React from 'react';
import { Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames'

import {
    SET_SIDEMENU_ACTIVE_STATE,
    SET_SIDEMENU_DEACTIVE_STATE
} from '../../../store/sideMenu/types';

import SideMenu from './menu';
import SideMenuItems from './items';

const toggleHandle = (
    isActive: boolean, 
    dispatch: Dispatch,) => {
        if(!isActive)
            dispatch({
                type: SET_SIDEMENU_ACTIVE_STATE
            })
        else
            dispatch({
                type: SET_SIDEMENU_DEACTIVE_STATE
            })
}

const SidePanel: React.FunctionComponent = () => {

    const store: any = useSelector(store => store);
    const dispatch: Dispatch = useDispatch()

    var toggleClasses: string = cn({
        'toggle': true,
        'active': store?.sidemenu?.isActive
    })

    var isActive: boolean = store?.sidemenu?.isActive;

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