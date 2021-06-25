import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../../../../contexts/global-context'
import { GlobalContextTypes } from '../../../../../types/global-context-types'
import { IProductCategoryTypes } from '../../../../../types/api-types'
import ProductBlock from './element'

const ProductElement: React.FunctionComponent = () => {
	const globalContext = useContext<GlobalContextTypes>(GlobalContext)

	return (
		<section className="container section-product flex">
			<div className="flex-block-1">
				{(globalContext.productCategories as []).length <= 3 &&
                    <React.Fragment>
                    	<div className="flex row">
                    		{(globalContext.productCategories as []).filter((item: IProductCategoryTypes, index: number) => index < 2 && item)
                    			.map((item: IProductCategoryTypes, index: number) =>
                    				<ProductBlock key={index}
                    					title={item.title}
                    					image={item.preview_image.image}
                    					url={`/products/${item.id}`}
                    					state={item.id} />
                    			)
                    		}
                    	</div>
                    	{
                    		(globalContext.productCategories as []).slice(-1).map((item: IProductCategoryTypes, index: number) =>
                    			<ProductBlock key={index}
                    				title={item.title}
                    				image={item.preview_image.image}
                    				url={`/products/${item.id}`}
                    				state={item.id} />
                    		)
                    	}
                    </React.Fragment>
				}
			</div>
			<div className="flex-block-1">
				<header>
					<h2>Продукция</h2>
					<p>Категории продукции, выпускаемой на предприятии</p>
				</header>
				<article className="descriptor">
					<p>
                        АО «НПК «АЛЬТЭН» располагает необходимым научным и
                        практическим опытом в области разработки, производства и
                        эксплуатации современных первичных и вторичных химических источников тока и
                        электрохимических энергоустановок.
					</p>
				</article>
				<Link className="_contained dark" to='/products'>Перейти</Link>
			</div>
		</section>
	)
}

export default ProductElement
