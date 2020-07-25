import { combineReducers } from 'redux';

import { sidemenuReducer } from './sideMenu/reducer';

export default combineReducers({
    sidemenu: sidemenuReducer
})