import React, { ReactText, ReactComponentElement } from 'react'
import cn from 'classnames'

interface ProductSelectedPreviewListTypes {
    items: [string, ReactText],
    changeState: Function,
    history
}

const inputChangeHandle = (func: Function, index: number, history) => {    
    let params: Array<string> = [];
    window.location.search.substr(0).split('&').forEach(p => params.push(p.replace('?', '')));

    let product = params[1];
    product = product.replace(product.substr(product.indexOf('=') + 1, product.length), index.toString());
    
    history.push({ search: `?${params[0]}&${product}` })
    func(index);
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
                            onChange={e => inputChangeHandle(props.changeState, index, props.history)}/>
                            <label htmlFor={`preview-list-item-${index}`}>
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