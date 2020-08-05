import React from 'react'
import cn from 'classnames'

type DocumentsWrapperItemTypes = {
    title: string,
    subtitle: string,
    text: string,
    file: {
        name: string,
        url: string
    }
}

const getFileExtension = (file: string) => {
    return file.split('.').pop()
}

const DocumentsWrapperItem: React.FunctionComponent<DocumentsWrapperItemTypes> 
    = (props) => {
    
    const fileType: string = getFileExtension(props.file.url)
    const fileTypeClasses = cn({
        'type': true,
        [`${fileType}`]: true
    })
    
    return (
        <div className="wrapper-list-item">
            <div className="title">
                <h2>{props.title}</h2>
                {props.subtitle !== null &&
                    <span>{props.subtitle}</span>
                }
            </div>
            <div className="content">
                <div className="text" dangerouslySetInnerHTML={{__html: props.text}}/>
                <div className="files">
                    <span>Файлы для скачивания</span>
                    <a className="file" href={props.file.url} download>
                        <div className={fileTypeClasses}/>
                        <span>{props.file.name}</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default React.memo(DocumentsWrapperItem)