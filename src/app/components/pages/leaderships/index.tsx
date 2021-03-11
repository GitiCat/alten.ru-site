import React, { useEffect, useReducer } from 'react'
import { getAsyncData } from '../../../utils/async-get-data'
import { ERROR, FETCHED } from '../../../utils/async-data-states/types'
import { asyncDataReducer, initialState } from '../../../utils/async-data-states/reducer'
import Header from '../../blocks/header/header'
import DataPreloader from '../../blocks/data-preloader/index'
import LeadershipsManager from './manager'

const LeadershipsComponent: React.FunctionComponent = () => {
    const [state, dispatch] = useReducer(asyncDataReducer, initialState)
    
    useEffect(() => {
        getAsyncData({
            api_v: 0,
            url: 'personnel',
            params: {}
        })
        .then(result => dispatch({ type: FETCHED, payload: { data: result.data }}))
        .catch(error => dispatch({ type: ERROR, payload: {errorString: error }}))
    }, [])

    useEffect(() => {
        document.title = 'Руководство'
    })
    
    return (
        <div className="content">
            {!state.loading ?
                <React.Fragment>
                    <Header title="Руководство" subtitle="Административный персонал АО «НПК «АЛЬТЭН»"/>
                    <article className="text leaderships-container flex flex-dir-row">
                        {
                            (state.data as []).map((item, index) => {
                                return (
                                    <LeadershipsManager key={index} 
                                        name={item['item']}
                                        descriptor={item['descriptor']}
                                        responsible={item['responsible']}
                                        position={item['position']}
                                        phone={item['phone']}
                                        fax={item['fax']}
                                        email={item['email']}
                                        isVisible={item['is_visible']}
                                        isPhoneVisible={item['is_phone_visible']}
                                        isFaxVisible={item['is_fax_visible']}
                                        isEmailVisible={item['is_email_visible']}/>
                                )
                            })
                        }
                    </article>
                </React.Fragment>
                : <DataPreloader/>
            }
        </div>
    )
}

export default LeadershipsComponent;