import React, { ReactText } from 'react'
import cn from 'classnames'
import { inputChangeHandle } from './utils/input-change'

interface ProductSelectedPreviewListTypes {
    items: [string, ReactText],
    changeState: Function,
    history
}

const ProductSelectedPreviewList
    : React.FunctionComponent<ProductSelectedPreviewListTypes> = (props) => {
    return (
        <div className="preview-list">
            {
                props.items.map((item: {}, index: number) => {
                    const image = item['main_image']
                    
                    const imgClasses = cn({
                        'img': true,
                        'no-image': image == null ? true : false
                    })
                    
                    return (
                        <div key={index} className="preview-list-item">
                            <input type="radio" name="product-preview-list-item" id={`preview-list-item-${index}`}
                            onChange={() => inputChangeHandle(props.changeState, index, props.history)}/>
                            <label className="flex" htmlFor={`preview-list-item-${index}`}>
                                <div className="block-title light">
                                    <h3>{item['title']}</h3>
                                </div>
                                <div className={imgClasses} style={{backgroundImage: `url(${image == null ? '/images/no-photo.png' : image['image']})`}}/>
                            </label>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default React.memo(ProductSelectedPreviewList)