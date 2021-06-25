import React, { useContext } from 'react'
import { Route } from 'react-router-dom'
import Loadables from './loadables'
import {
	SelectedProductContext,
} from '../contexts/selected-product-context'
import { GlobalContext } from '../contexts/global-context'
import { GlobalContextTypes } from '../types/global-context-types'
import { IProductCategoryTypes } from '../types/api-types'

const ProductsRoutes: React.FunctionComponent = () => {
	const globalContext: GlobalContextTypes = useContext(GlobalContext)

	return (
		<SelectedProductContext.Provider value={{ dispatch: null, state: null }}>
			<Route exact path='/products' component={Loadables.ProductsComponent} />
			{(globalContext.productCategories as []).length > 0 &&
                (globalContext.productCategories as []).map((item: IProductCategoryTypes, index: number) => {
                	const path = `/products/${item.id}`
                	return (
                		<Route key={index} exact path={path} component={Loadables.ProductsSelected}/>
                	)
                })
			}
		</SelectedProductContext.Provider>
	)
}


export default React.memo(ProductsRoutes)
