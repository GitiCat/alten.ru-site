import { combineReducers } from 'redux'

import { sidemenuReducer } from './sideMenu/reducer'
import { productSelectedReducer } from './products-selected/reducer'
import { asyncDataReducer } from '../../utils/async-data-states/reducer'

export default combineReducers({
	sidemenu: sidemenuReducer,
	asyncDataReducer,
	productSelected: productSelectedReducer,
})
