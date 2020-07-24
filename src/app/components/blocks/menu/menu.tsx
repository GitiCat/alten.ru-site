import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import classNames from 'classnames';

const NavLinkItem = (props: NavLinkProps) => {
    var itemClasses = classNames({
        'nav-item': true,
        [props.className]: props.className != undefined
    });
    return <NavLink to={props.to} activeClassName='current' className={itemClasses}>{props.children}</NavLink>
}

const Menu: React.FunctionComponent = () => {
    return (
        <div className="menu-block">
            <div className="nav-list">
                <NavLinkItem to='/home'>Главная</NavLinkItem>
                <NavLinkItem to='/history'>История</NavLinkItem>
                <NavLinkItem to='/activity'>Деятельность</NavLinkItem>
                <NavLinkItem to='/products' className='dropdown'>
                    Продукция
                    <div className="dropdown-content">
                        <NavLinkItem to='/products/rechargeable-batteries'>Аккумуляторные батареи</NavLinkItem>
                        <NavLinkItem to='/products/primary-current-sources'>Первичные источники тока</NavLinkItem>
                        <NavLinkItem to='/products/zru'>Зарядно - разрядные устройства</NavLinkItem>
                    </div>
                </NavLinkItem>
                <NavLinkItem to='/company' className='dropdown'>
                    Предприятие
                    <div className="dropdown-content">
                        <NavLinkItem to='/company/leadership'>Руководство</NavLinkItem>
                        <NavLinkItem to='/company/publications'>Публикации</NavLinkItem>
                        <NavLinkItem to='/company/licences'>Лицензии</NavLinkItem>
                        <NavLinkItem to='/company/gallery'>Галерея</NavLinkItem>
                    </div>
                </NavLinkItem>
                <NavLinkItem to='/news'>Новости</NavLinkItem>
            </div>
        </div>
    )
}

export default Menu;