import React from 'react';
import NavLinkItem from '../navLinkItem';

import Home from '@material-ui/icons/HomeRounded'
import History from '@material-ui/icons/LibraryBooksRounded'
import Activity from '@material-ui/icons/WorkRounded'
import Products from '@material-ui/icons/BatteryFullRounded'
import Company from '@material-ui/icons/HomeWorkRounded'
import News from '@material-ui/icons/AnnouncementRounded'

const SideMenuItems: React.FunctionComponent = () => {
    return (
        <div className="side-menu--items">
            <div className="link-icon">
                <Home/>
                <NavLinkItem to='/home'>Главная</NavLinkItem>
            </div>
            <div className="link-icon">
                <History/>
                <NavLinkItem to='/history'>История</NavLinkItem>
            </div>
            <div className="link-icon">
                <Activity/>
                <NavLinkItem to='/activity'>Производство</NavLinkItem>
            </div>
            <div className="category">
                <div className="link-icon">
                    <Products/>
                    <NavLinkItem to='/products'>Продукция</NavLinkItem>
                </div>
                <div className="sub">
                    <NavLinkItem to='/products/rechargeable-batteries'>Аккумуляторные батареи</NavLinkItem>
                    <NavLinkItem to='/products/primary-current-sources'>Первичные источники тока</NavLinkItem>
                    <NavLinkItem to='/products/zru'>Зарядно - разрядные устройства</NavLinkItem>
                </div>
            </div>
            <div className="category">
                <div className="link-icon">
                    <Company/>
                    <NavLinkItem to='/company'>Предприятие</NavLinkItem>
                </div>
                <div className="sub">
                    <NavLinkItem to='/company/leadership'>Руководство</NavLinkItem>
                    <NavLinkItem to='/company/publications'>Публикации</NavLinkItem>
                    <NavLinkItem to='/company/licences'>Лицензии</NavLinkItem>
                    <NavLinkItem to='/company/gallery'>Галерея</NavLinkItem>
                </div>
            </div>
            <div className="link-icon">
                <News/>
                <NavLinkItem to='/news'>Новости</NavLinkItem>
            </div>
        </div>
    )
}

export default React.memo(SideMenuItems);