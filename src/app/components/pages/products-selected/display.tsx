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
    const image = props.image_url == null ? '/images/no-photo.png' : props.image_url
    const imageWidth = props.image_url == null ? 300 : 300,
          imageHeight = props.image_url == null ? 300 : 350
    
    const imageClasses = cn({
        'no-image': props.image_url == null
    })
    
    return (
        <div className="display">
            <div className="middle-title">
                <h3>{props.title}</h3>
            </div>
            <div className="content">
                <div className="descriptor">
                    <div className="text" dangerouslySetInnerHTML={{__html: props.descriptor}}/>
                    <div className="features" dangerouslySetInnerHTML={{__html: props.features}}/>
                </div>
                <picture className={imageClasses}>
                    <img src={image} width={imageWidth} height={imageHeight}/>
                </picture>
            </div>
        </div>
    )
}

export default ProductSelectedDisplay