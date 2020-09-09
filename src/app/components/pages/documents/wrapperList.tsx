import React from 'react'
import DocumentsWrapperItem from './items'

type DocumentWrapperListTypes = {
    title: string,
    descriptor: string,
    items: []
}

const DocumentsWrapperList: React.FunctionComponent<DocumentWrapperListTypes> = (props) => {
    return (
        <section className="wrapper-list">
            <header>
                <h2>{props.title}</h2>
                <span>{props.descriptor}</span>
            </header>
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
        </section>
    )
}

export default React.memo(DocumentsWrapperList)