import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IProductTypes } from '../../../../types/api-types'
import ProductSelectedSliderItem from './item'

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'

import SwiperCore, {
	Navigation,
} from 'swiper/core'

SwiperCore.use([Navigation])

type ProductSelectedSliderTypes = {
	items: Array<IProductTypes> | {}
}

const ProductSelectedSlider: React.FunctionComponent<ProductSelectedSliderTypes> = props =>
	<div className="product-selected--slider">
		<Swiper className='slider--swiper' spaceBetween={30} slidesPerView='auto' navigation={true}>
			{
				(props.items as []).map((item: IProductTypes, index: number) => {
					const imageUrl: string = item.main_image === null
						? null
						: item.main_image.image

					return (
						<SwiperSlide key={index}>
							<ProductSelectedSliderItem id={index}
								title={item.title}
								image_url={imageUrl}/>
						</SwiperSlide>
					)
				})
			}
		</Swiper>
	</div>


export default ProductSelectedSlider
