import {
    SidemenuState,
    SidemenuActionTypes,
    UPDATE_SIDEMENU_STATE
} from './types'

const initialState: SidemenuState = {
    isActive: false
}

export const sidemenuReducer = (state = initialState, action: SidemenuActionTypes)
    : SidemenuState => {
    switch(action.type) {
        case UPDATE_SIDEMENU_STATE: {
            return {
                ...state,
                ...action.payload
            }
        }
    }
}