import React from 'react'
import { Helmet } from 'react-helmet'

const GalleryComponent: React.FunctionComponent = () => {
    return (
        <div className='content'>
            <Helmet>
                <title>Галерея</title>
            </Helmet>
        </div>
    )
}

export default GalleryComponent;