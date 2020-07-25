export interface SidemenuState {
    isActive: boolean
}

export const UPDATE_SIDEMENU_STATE = 'UPDATE_SIDEMENU_STATE';

interface UpdateSidemenuState {
    type: typeof UPDATE_SIDEMENU_STATE
    payload: SidemenuState
}

export type SidemenuActionTypes = UpdateSidemenuState