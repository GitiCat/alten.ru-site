import { Action } from 'redux'

export interface SidemenuState {
	isActive: boolean
}

export const SET_SIDEMENU_ACTIVE_STATE = 'SET_SIDEMENU_ACTIVE_STATE'
export const SET_SIDEMENU_DEACTIVE_STATE = 'SET_SIDEMENU_DEACTIVE_STATE'

interface SetSidemenuActiveState extends Action {
	type: typeof SET_SIDEMENU_ACTIVE_STATE
	payload: SidemenuState
}

interface SetSidemenuDeactiveState extends Action {
	type: typeof SET_SIDEMENU_DEACTIVE_STATE
	payload: SidemenuState
}

export type SidemenuActionTypes = SetSidemenuActiveState | SetSidemenuDeactiveState
