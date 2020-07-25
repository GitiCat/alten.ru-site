import { 
    SidemenuState, 
    UPDATE_SIDEMENU_STATE, 
    SidemenuActionTypes 
} from './types'

export const updateSidemenuState = (newState: SidemenuState) 
    : SidemenuActionTypes => {
    return {
        type: UPDATE_SIDEMENU_STATE,
        payload: newState
    }
}