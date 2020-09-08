import React from 'react';

import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import CallSplitOutlinedIcon from '@material-ui/icons/CallSplitOutlined';
import AvTimerOutlinedIcon from '@material-ui/icons/AvTimerOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

const styles = {
    container: {
        background: "linear-gradient(25deg, #003fb2 0%, #003fb2 25%, #3b69e5 100%)"
    } as React.CSSProperties,
    list: {
        textAlign: "center"
    } as React.CSSProperties,
    noMargin: {
        margin: "0"
    } as React.CSSProperties
}

const ServicesElement: React.FunctionComponent<any> = () => {
    return (
        <section className="container" style={styles.container}>
            <header className="light">
                <h2>Услуги</h2>
                <p>Предприятие предоставляет все необходимые услуги нашим клиентам по выпускаемой продукции</p>
            </header>
            <div className="content">
                <ul className="inline-flex flex-space-around service-list" style={styles.list}>
                    <li>
                        <HelpOutlineOutlinedIcon />
                        <header className="light" style={styles.noMargin}>
                            <h4>Поддержка</h4>
                            <p>Ответим на любые Ваши вопросы в короткие сроки</p>
                        </header>
                    </li>
                    <li>
                        <AssignmentOutlinedIcon />
                        <header className="light" style={styles.noMargin}>
                            <h4>Задача</h4>
                            <p>Найдем решение для поставленных задач</p>
                        </header>
                    </li>
                    <li>
                        <CallSplitOutlinedIcon />
                        <header className="light" style={styles.noMargin}>
                            <h4>Разработка</h4>
                            <p>Разработаем источники по Вашему заказу</p>
                        </header>
                    </li>
                    <li>
                        <AvTimerOutlinedIcon />
                        <header className="light" style={styles.noMargin}>
                            <h4>Испытания</h4>
                            <p>Полное испытание источника перед его выпуском</p>
                        </header>
                    </li>
                    <li>
                        <SettingsOutlinedIcon />
                        <header className="light" style={styles.noMargin}>
                            <h4>Техпомощь</h4>
                            <p>Долгосрочное обслуживание выпущеной продукции</p>
                        </header>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default ServicesElement;