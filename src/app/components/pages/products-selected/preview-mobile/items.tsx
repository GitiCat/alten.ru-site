import React, { ReactText } from 'react'
import cn from 'classnames'
import { inputChangeHandle } from '../utils/input-change'

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
                        'no-image': image == null ? true : false
                    })

                    return (
                        <div key={index} className="preview-list-item">
                            <input type="radio" name="list-item" id={`list-item-${index}`}
                            onChange={() => inputChangeHandle(props.changeState, index, props.history)}/>
                            <label className="flex" htmlFor={`list-item-${index}`}>
                                <header className='light'>
                                    <h4>{item['title']}</h4>
                                </header>
                                <div className={imgClasses} style={{backgroundImage: `url(${image == null ? '/image/no-photo.png' : image['image']})`}}/>
                            </label>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PreviewMobileList