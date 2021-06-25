import React, { useEffect, useState } from 'react'
import {
	Router,
	Switch,
} from 'react-router-dom'
import { createBrowserHistory } from 'history'
import AppRoutes from './routes/index'
import SideMenuPanel from './components/blocks/sideMenu/panel'
import FooterBlock from './components/blocks/footer/footer'
import Preloader from './components/blocks/data-preloader/index'
import { MemodBlackoutBlock } from './components/blocks/blackout/blackout'
import { getAsyncData } from './utils/async-get-data'
import { GlobalContext, initialGlobalContext } from './contexts/global-context'

const history = createBrowserHistory()

const App: React.FunctionComponent = () => {
	const [globalState, updateGlobalState] = useState(initialGlobalContext)

	useEffect(() => {
		getAsyncData({
			api_v: 0,
			url: 'categories-product',
			params: {},
		}).then(result => {
			updateGlobalState({
				isInitialized: true,
				productCategories: result.data,
			})
		})
	}, [])

	return (
		<GlobalContext.Provider value={globalState}>
			{
				globalState.isInitialized ?
					<Router history={history}>
						<MemodBlackoutBlock />
						<SideMenuPanel />
						<Switch>
							<AppRoutes />
						</Switch>
						<FooterBlock />
					</Router>
					: <Preloader/>
			}
		</GlobalContext.Provider>
	)
}

export default App
