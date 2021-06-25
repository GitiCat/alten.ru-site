import {
	SET_SIDEMENU_ACTIVE_STATE,
	SET_SIDEMENU_DEACTIVE_STATE,
	SidemenuActionTypes,
	SidemenuState,
} from './types'

export const updateSidemenuStateToActive = (newState: SidemenuState)
: SidemenuActionTypes => ({
	type: SET_SIDEMENU_ACTIVE_STATE,
	payload: newState,
})

export const updateSidemenuStateToDeactive = (newState: SidemenuState)
: SidemenuActionTypes => ({
	type: SET_SIDEMENU_DEACTIVE_STATE,
	payload: newState,
})
