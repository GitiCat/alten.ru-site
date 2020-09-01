import React, { MouseEvent } from 'react';
import cn from 'classnames';
import { setItemTransition, setItemHeight} from './transition-height-hepler'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

type LeadershipsItemTypes = {
    id: number,
    title: string,
    subtitle: string,
    text: string,
    image: {
        url: string,
        descriptor?: string
    }
}

const expandItem = (begin: string, el: HTMLElement, isExpand: boolean, expandText: string, defaultHeight: number) => {
    if(isExpand) el.classList.add('expanded')
    else el.classList.remove('expanded')
    
    setItemTransition(begin, el, 'content .text', 'p', .07)
    setItemHeight(el, 'expanded', 'content .text p', defaultHeight)
    el.querySelector('.expand .content').innerHTML = expandText
}

const LeadershipsItem: React.FunctionComponent<LeadershipsItemTypes> = (props) => {
    const defaultHeight: number = 333;

    const expandHandle = (e: React.MouseEvent<HTMLDivElement>) => {
        const root: HTMLElement = e.currentTarget.parentElement.parentElement;
        const expandedElements: NodeListOf<HTMLElement>  = document.querySelectorAll('.expanded')

        if(expandedElements.length !== 0) {
            Array.from(expandedElements).forEach(element => {
                if(element == root)
                    return;
                
                element.classList.remove('expanded')
                setItemHeight(element, 'expanded', 'content .text p', defaultHeight)
                element.querySelector('.expand .content').innerHTML = 'Развернуть'
            })
        }

        if(!root.classList.contains('expanded')) {
            expandItem('start', root, true, 'Свернуть', defaultHeight)
        }
        else {
            expandItem('end', root, false, 'Развернуть', defaultHeight)
        }
    }

    return (
        <div className='item' style={{height: defaultHeight}}>
            <div className="profile">
                <picture>
                    <img src={props.image.url} alt={props.image.descriptor}
                        width='250px' height='325'/>
                </picture>
            </div>
            <div className="content">
                <div className="middle-title">
                    <h3>{props.title}</h3>
                    <span>{props.subtitle}</span>
                </div>
                <div className="text" dangerouslySetInnerHTML={{__html: props.text}}/>
            </div>
            <div className="abs">
                <div className="expand" onClick={expandHandle}>
                    <div className="circle">
                        <ExpandMoreIcon/>
                    </div>
                    <div className="content">Развернуть</div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(LeadershipsItem);