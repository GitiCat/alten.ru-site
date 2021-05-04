import React, { useContext } from 'react';
import NavLinkItem from '../navLinkItem';
import { GlobalContext } from '../../../contexts/global-context'
import { IProductCategoryTypes } from '../../../types/api-types';

const SideMenuItems: React.FunctionComponent = () => {
    const globalContext = useContext(GlobalContext)

    return (
        <div className="side-menu--items">
            <div className="link-icon flex">
                <NavLinkItem to='/'>Главная</NavLinkItem>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
                </svg>
            </div>
            <div className="link-icon flex">
                <NavLinkItem to='/history'>История</NavLinkItem>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"></path>
                </svg>
            </div>
            <div className="link-icon flex">
                <NavLinkItem to='/activity'>Деятельность</NavLinkItem>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
                </svg>
            </div>
            <div className="category">
                <div className="link-icon flex">
                    <NavLinkItem to='/products'>Продукция</NavLinkItem>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"></path>
                    </svg>
                </div>
                <div className="sub">
                    {
                        (globalContext.productCategories as []).length > 0 && 
                            (globalContext.productCategories as []).map((item: IProductCategoryTypes, index: number) => {
                                return (
                                    <NavLinkItem key={index} to={{pathname: `/products/${item.id}`}}>{item.name}</NavLinkItem>
                                )
                            })
                    }
                </div>
            </div>
            <div className="category">
                <div className="link-icon flex">
                    <NavLinkItem to='/company'>Предприятие</NavLinkItem>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 16h8v-16h-8v16zM5 2h2v2h-2v-2zM5 6h2v2h-2v-2zM5 10h2v2h-2v-2zM1 2h2v2h-2v-2zM1 6h2v2h-2v-2zM1 10h2v2h-2v-2zM9 5h7v1h-7zM9 16h2v-4h3v4h2v-9h-7z"></path>
                    </svg>
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
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"></path>
                </svg>
            </div>
        </div>
    )
}

export default React.memo(SideMenuItems);