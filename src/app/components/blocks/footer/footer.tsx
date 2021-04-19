import React from 'react';
import { NavLink } from 'react-router-dom'

class FooterBlock extends React.PureComponent<{}, any> {

    componentDidMount() {
        const currentYear: number = new Date().getFullYear();
        document.getElementById('copy-date').innerText = String(currentYear);
    }

    render() {
        return (
            <footer className="footer" id="footer">
                <div className="footer-container flex">
                    <div className="footer-block">
                        <div className="company">
                            <h3>АО НПК АЛЬТЭН</h3>
                            <span>Акционерное общество «Научно-производственный комплекс «Альтэрнативная энергетика»</span>
                        </div>
                    </div>
                    <div className="footer-block flex flex-dir-col">
                        <span>Предприятие</span>
                        <hr/>
                        <NavLink className='f-nav-link' activeClassName='active' to='/company/leaderships'>Руководство</NavLink>
                        <NavLink className='f-nav-link' activeClassName='active' to='/company/publications'>Публикации</NavLink>
                        <NavLink className='f-nav-link' activeClassName='active' to='/company/licences'>Лицензии</NavLink>
                        <NavLink className='f-nav-link' activeClassName='active' to='/company/gallery'>Галерея</NavLink>
                    </div>
                    <div className="footer-block flex flex-dir-col">
                        <span>Карта сайта</span>
                        <hr/>
                        <NavLink className='f-nav-link' activeClassName='active' to='/'>Главная</NavLink>
                        <NavLink className='f-nav-link' activeClassName='active' to='/history'>История</NavLink>
                        <NavLink className='f-nav-link' activeClassName='active' to='/company/licences'>Лицензии</NavLink>
                        <NavLink className='f-nav-link' activeClassName='active' to='/activity'>Деятельность</NavLink>
                        <NavLink className='f-nav-link' activeClassName='active' to='/products'>Продукция</NavLink>
                        <NavLink className='f-nav-link' activeClassName='active' to='/company/documents'>Документы</NavLink>
                        <NavLink className='f-nav-link' activeClassName='active' to='/news'>Новости</NavLink>
                    </div>
                    <div className="footer-block flex flex-dir-col">
                        <span>Контакты</span>
                        <hr/>
                        <div>Телефон: <a className='f-nav-link' href="tel:84999951789">+7 (499) 995-17-89</a></div>
                        <div>Факс / телефон: <a className='f-nav-link' href="tel:84992406412">+7 (499) 270-64-12</a></div>
                        <div>Адрес: <a className='f-nav-link' href="https://yandex.ru/maps/21642/elektrougli/?z=17&ll=38.206184%2C55.724726&l=map&origin=jsapi_2_1_68&from=api-maps&mode=whatshere&whatshere%5Bpoint%5D=38.204875%2C55.723554&whatshere%5Bzoom%5D=17">142455 Московская область, г. Электроугли, Центральная улица, 59</a></div>
                        <div>E-mail: <a className='f-nav-link' href="mailto:info@npk-alten.ru">info@npk-alten.ru</a></div>
                        <a className='f-nav-link' href="https://npk-alten.ru">www.npk-alten.ru - официальный сайт АО НПК АЛЬТЭН</a>
                    </div>
                </div>
                <div className="copyright">&copy;Copyright&nbsp;<span id="copy-date"></span>&nbsp;Все права защищены.</div>
            </footer>
        )
    }
}

export default FooterBlock;