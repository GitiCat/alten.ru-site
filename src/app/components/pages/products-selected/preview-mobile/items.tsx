import React, { ReactText } from 'react'
import cn from 'classnames'
import { inputChangeHandle } from '../utils/input-change'
import { ProductConsumer } from '../utils/context'

type PreviewMobileListTypes = {
    items: [string, ReactText]
    changeState: Function
    history
}

const PreviewMobileList: React.FunctionComponent<PreviewMobileListTypes> = (props) => {
    return (
        <div className="preview-mobile-list">
            {
                props.items.map((item: {}, index: number) => {
                    const image = item['main_image']

                    const imgClasses = cn({
                        'img': true,
                        'no-photo': image == null ? true : false
                    })
                    return (
                        <ProductConsumer key={index}>
                            {id =>
                            <div className="preview-list-item">
                                <input type="radio" name="list-item" id={`list-item-${index}`}
                                onChange={() => inputChangeHandle(props.changeState, index, props.history)}
                                checked={index == id ? true : false}/>
                                <label className="flex" htmlFor={`list-item-${index}`}>
                                    <header className='light'>
                                        <h4>{item['title']}</h4>
                                    </header>
                                    <div className={imgClasses} style={{backgroundImage: `url(${image == null ? '/images/no-photo.png' : image['image']})`}}/>
                                </label>
                            </div>
                            }
                        </ProductConsumer>
                    )
                })
            }
        </div>
    )
}

export default PreviewMobileList