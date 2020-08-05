import React from 'react'
import DocumentsWrapperItem from './items'

type DocumentWrapperListTypes = {
    title: string,
    descriptor: string,
    items: []
}

const DocumentsWrapperList: React.FunctionComponent<DocumentWrapperListTypes> = (props) => {
    return (
        <div className="wrapper-list">
            <div className="title">
                <h2>{props.title}</h2>
                <span>{props.descriptor}</span>
            </div>
            {
                Array.from(props.items).map((item, index) => {
                    return (
                        <DocumentsWrapperItem key={index}
                            title = {item['title']}
                            subtitle = {item['subtitle']}
                            text = {item['text']}
                            file = {{ 
                                name: item['file']['descriptor'],
                                url: item['file']['file'] 
                            }}
                        />
                    )
                })
            }
        </div>
    )
}

export default React.memo(DocumentsWrapperList)