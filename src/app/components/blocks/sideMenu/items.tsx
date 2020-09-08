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
            <div className="link-icon flex">
                <NavLinkItem to='/'>Главная</NavLinkItem>
                <Home/>
            </div>
            <div className="link-icon flex">
                <NavLinkItem to='/history'>История</NavLinkItem>
                <History/>
            </div>
            <div className="link-icon flex">
                <NavLinkItem to='/activity'>Производство</NavLinkItem>
                <Activity/>
            </div>
            <div className="category">
                <div className="link-icon flex">
                    <NavLinkItem to='/products'>Продукция</NavLinkItem>
                    <Products/>
                </div>
                <div className="sub">
                    <NavLinkItem to={{
                        pathname: '/products/primary-current-sources',
                        search: '?category=3&product=0'
                    }}>Первичные источники тока</NavLinkItem>
                    <NavLinkItem to={{
                        pathname: '/products/rechargeable-batteries',
                        search: '?category=2&product=0'
                    }}>Литий-йонные аккмуляторы</NavLinkItem>
                    <NavLinkItem to={{
                        pathname: '/products/zru',
                        search: '?category=1&product=0'
                    }}>Зарядно - разрядные устройства</NavLinkItem>
                </div>
            </div>
            <div className="category">
                <div className="link-icon flex">
                    <NavLinkItem to='/company'>Предприятие</NavLinkItem>
                    <Company/>
                </div>
                <div className="sub">
                    <NavLinkItem to='/company/leaderships'>Руководство</NavLinkItem>
                    <NavLinkItem to='/company/publications'>Публикации</NavLinkItem>
                    <NavLinkItem to='/company/licences'>Лицензии</NavLinkItem>
                    <NavLinkItem to='/company/documents'>Документы</NavLinkItem>
                    <NavLinkItem to='/company/gallery'>Галерея</NavLinkItem>
                </div>
            </div>
            <div className="link-icon flex">
                <NavLinkItem to='/news'>Новости</NavLinkItem>
                <News/>
            </div>
        </div>
    )
}

export default React.memo(SideMenuItems);