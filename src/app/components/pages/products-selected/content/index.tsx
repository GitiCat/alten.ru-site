import React from 'react'
import parse from 'html-react-parser'
import cn from 'classnames'
import { IProductSelectedContentTypes } from '../../../../types/selected-product-types'
import InformationBlock, { InformationType } from '../../../blocks/information'

const ProductSelectedContent: React.FunctionComponent<IProductSelectedContentTypes>
    = (props) => {
        const productImageClasses: string = cn({
            'product--image': true,
            'no-image': props.image_url === null
        })

        return (
            <article className="product-selected--content">
                <div className="flex flex-dir-row content--title">
                    <div className={productImageClasses}
                        style={{ backgroundImage: props.image_url !== null && `url(${props.image_url['image']})` }} />
                    <div className="flex flex-dir-col">
                        <header>
                            <h2>{props.title}</h2>
                                {parse(props.descriptor)}
                            <hr />
                        </header>
                        <div className="props">
                            <header style={{ margin: '7px 0px' }}>
                                <h4>Основные характеристики</h4>
                            </header>
                            {parse(props.feature, { trim: true })}
                        </div>
                        <div className="flex flex-dir-col files-container">
                            <header style={{ margin: '7px 0px' }}>
                                <h4>Список файлов</h4>
                            </header>
                            <div className="files--list">
                                {
                                    props.files === null &&
                                    <InformationBlock type={InformationType.Info}
                                        string='Файлы для загрузки отсутствуют' />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        )
    }

export default ProductSelectedContent