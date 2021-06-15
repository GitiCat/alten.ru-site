import React, { useEffect } from 'react'
import { Dispatch } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import { AsyncDataStatesTypes, LOADING } from '../../../utils/async-data-states/types'
import { IAsyncDataRequestTypes } from '../../../redux/saga/async-data-request-saga'
import Header from '../../blocks/header/header'
import DataPreloader from '../../blocks/data-preloader/index'
import { IVacanciesTypes } from '../../../types/api-types'
import VacanciesWrapperComponent from './wrapper'

const VacanciesComponent = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const asyncDataSelector: AsyncDataStatesTypes = useSelector(state => state['asyncDataReducer'])

    useEffect(() => {
        const payload: IAsyncDataRequestTypes = { url: 'vacancies' }
        dispatch({ type: LOADING, payload })
    }, [])

    const data = asyncDataSelector.data as Array<{}>

    return (
        <div className="content">
            <Header title='Вакансии' subtitle='Открытые вакансии на предприятии АО «НПК «АЛЬТЭН»' />
            {!asyncDataSelector.loading ?
                <article className="text vacancies-text">
                    {data !== null &&
                        <React.Fragment>
                            <header>
                                <h2>Открытых вакансий: {data.length}</h2>
                                {data.length === 0 &&
                                    <p>В данный момент на предприятии нет открытых вакансий...</p>
                                }
                            </header>
                            {data.length !== 0 &&
                                <VacanciesWrapperComponent data={data as Array<IVacanciesTypes>}/>
                            }
                        </React.Fragment>
                    }
                </article>
                : <DataPreloader />
            }
        </div>
    )
}

export default VacanciesComponent