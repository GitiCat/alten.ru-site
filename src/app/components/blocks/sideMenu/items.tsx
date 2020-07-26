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
                <NavLinkItem to='/home'>Главная</NavLinkItem>
                <Home/>
            </div>
            <div className="link-icon">
                <NavLinkItem to='/history'>История</NavLinkItem>
                <History/>
            </div>
            <div className="link-icon">
                <NavLinkItem to='/activity'>Производство</NavLinkItem>
                <Activity/>
            </div>
            <div className="category">
                <div className="link-icon">
                    <NavLinkItem to='/products'>Продукция</NavLinkItem>
                    <Products/>
                </div>
                <div className="sub">
                    <NavLinkItem to='/products/rechargeable-batteries'>Аккумуляторные батареи</NavLinkItem>
                    <NavLinkItem to='/products/primary-current-sources'>Первичные источники тока</NavLinkItem>
                    <NavLinkItem to='/products/zru'>Зарядно - разрядные устройства</NavLinkItem>
                </div>
            </div>
            <div className="category">
                <div className="link-icon">
                    <NavLinkItem to='/company'>Предприятие</NavLinkItem>
                    <Company/>
                </div>
                <div className="sub">
                    <NavLinkItem to='/company/leadership'>Руководство</NavLinkItem>
                    <NavLinkItem to='/company/publications'>Публикации</NavLinkItem>
                    <NavLinkItem to='/company/licences'>Лицензии</NavLinkItem>
                    <NavLinkItem to='/company/documents'>Документы</NavLinkItem>
                    <NavLinkItem to='/company/gallery'>Галерея</NavLinkItem>
                </div>
            </div>
            <div className="link-icon">
                <NavLinkItem to='/news'>Новости</NavLinkItem>
                <News/>
            </div>
        </div>
    )
}

export default React.memo(SideMenuItems);