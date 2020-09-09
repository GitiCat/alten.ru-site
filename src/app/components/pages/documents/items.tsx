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

    const styles = {
        header: {
            marginBottom: '12px'
        } as React.CSSProperties
    }
    
    return (
        <div className="wrapper-list-item">
            <header style={styles.header}>
                <h4>{props.title}</h4>
                {props.subtitle !== null &&
                    <span>{props.subtitle}</span>
                }
            </header>
            <div className="content">
                <article className="descriptor" dangerouslySetInnerHTML={{__html: props.text}}/>
                <div className="files">
                    <span>Файлы для скачивания</span>
                    <a className="file flex" href={props.file.url} download>
                        <div className={fileTypeClasses}/>
                        <span>{props.file.name}</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default React.memo(DocumentsWrapperItem)