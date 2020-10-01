import React from 'react'
import cn from 'classnames'

type ProductSelectedDisplayTypes = {
    title: string,
    descriptor: string,
    features: string,
    image_url: string
    files: []
}

const ProductSelectedDisplay: React.FunctionComponent<ProductSelectedDisplayTypes> = (props) => {
    const image = props.image_url == null ? '/static/assepts/images/no-photo.png' : props.image_url
    const imageWidth = props.image_url == null ? 300 : 300,
          imageHeight = props.image_url == null ? 300 : 350
    
    const imageClasses = cn({
        'no-image': props.image_url == null
    })
    
    return (
        <div className="display">
            <header className="middle-title">
                <h2>{props.title}</h2>
            </header>
            <article className="content flex">
                <div className="descriptor">
                    <div className="text" dangerouslySetInnerHTML={{__html: props.descriptor}}/>
                    <div className="features" dangerouslySetInnerHTML={{__html: props.features}}/>
                </div>
                <picture className={imageClasses}>
                    <img src={image} width={imageWidth} height={imageHeight}/>
                </picture>
            </article>
        </div>
    )
}

export default React.memo(ProductSelectedDisplay)