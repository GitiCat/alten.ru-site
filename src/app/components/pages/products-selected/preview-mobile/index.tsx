import React, { ReactText } from 'react'
import PreviewMobileList from './items'
import cn from 'classnames'

type PreviewMobileTypes = {
    items: [string, ReactText],
    changeState: Function,
    history
}

const PreviewMobileBlock: React.FunctionComponent<PreviewMobileTypes> = (props) => {
    const mobileToggleClasses = cn({
        'mobile-toggle': true
    })

    return (
        <React.Fragment>
            <div className="preview-mobile-toggle">
                <svg className={mobileToggleClasses} viewBox="0 0 100 100" width="45">
                    <path d="m87.073 40.762h-46.146a1.749 1.749 0 0 0 
                        -1.75 1.75v7.794a1.75 1.75 0 0 0 1.75 1.75h.614v33.432a1.749 1.749 0 0 0 
                        1.75 1.75h41.418a1.749 1.749 0 0 0 
                        1.75-1.75v-33.432h.614a1.75 1.75 0 0 0 
                        1.75-1.75v-7.794a1.749 1.749 0 0 0 
                        -1.75-1.75zm-1.75 7.794h-15.665v-4.294h15.665zm-23.481-4.294h4.316v12.609l-1.279-.743a1.753 1.753 0 0 0 
                        -1.758 0l-1.279.743zm-19.165 0h15.665v4.294h-15.665zm40.282 39.476h-37.918v-31.682h13.3v7.855a1.75 1.75 0 0 0 
                        2.629 1.514l3.03-1.76 3.029 1.76a1.75 1.75 0 0 0 
                        2.629-1.514v-7.855h13.3z"></path>
                </svg>
            </div>
            <div className="preview-mobile-container">
                <PreviewMobileList items={props.items}
                    changeState={props.changeState}
                    history={props.history}
                />
            </div>
        </React.Fragment>
    )
}

export default React.memo(PreviewMobileBlock)