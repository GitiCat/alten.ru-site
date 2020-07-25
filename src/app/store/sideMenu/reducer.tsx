import {
    SidemenuState,
    SidemenuActionTypes,
    SET_SIDEMENU_ACTIVE_STATE,
    SET_SIDEMENU_DEACTIVE_STATE
} from './types'

const initialState: SidemenuState = {
    isActive: false
}

export const sidemenuReducer = (state = initialState, action: SidemenuActionTypes)
    : SidemenuState => {
    switch(action.type) {
        case SET_SIDEMENU_ACTIVE_STATE: {
            return {
                ...state,
                isActive: true
            }
        }
        case SET_SIDEMENU_DEACTIVE_STATE: {
            return {
                ...state,
                isActive: false
            }
        }
        default:
            return state
    }
}