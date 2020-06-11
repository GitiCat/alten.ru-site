import React from 'react';

import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import CallSplitOutlinedIcon from '@material-ui/icons/CallSplitOutlined';
import AvTimerOutlinedIcon from '@material-ui/icons/AvTimerOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

const ServicesElement: React.FunctionComponent<any> = () => {
    return (
        <div className="container service">
            <div className="title">
                <h2>Услуги</h2>
                <span>Предприятие предоставляет все необходимые услуги нашим клиентам по выпускаемой продукции</span>
            </div>
            <div className="content">
                <ul>
                    <li>
                        <HelpOutlineOutlinedIcon />
                        <div className="context">
                            <h3>Поддержка</h3>
                            <p>Ответим на любые Ваши вопросы в короткие сроки</p>
                        </div>
                    </li>
                    <li>
                        <AssignmentOutlinedIcon />
                        <div className="context">
                            <h3>Задача</h3>
                            <p>Найдем решение для поставленных задач</p>
                        </div>
                    </li>
                    <li>
                        <CallSplitOutlinedIcon />
                        <div className="context">
                            <h3>Разработка</h3>
                            <p>Разработаем источники по Вашему заказу</p>
                        </div>
                    </li>
                    <li>
                        <AvTimerOutlinedIcon />
                        <div className="context">
                            <h3>Испытания</h3>
                            <p>Полное испытание источника перед его выпуском</p>
                        </div>
                    </li>
                    <li>
                        <SettingsOutlinedIcon />
                        <div className="context">
                            <h3>Техпомощь</h3>
                            <p>Долгосрочное обслуживание выпущеной продукции</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ServicesElement;