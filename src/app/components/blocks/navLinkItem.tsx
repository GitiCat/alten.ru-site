import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import classNames from 'classnames';

const NavLinkItem = (props: NavLinkProps) => {
    const itemClasses = classNames({
        'nav-item': true,
        [props.className]: props.className != undefined
    });
    return <NavLink to={props.to} activeClassName='current' className={itemClasses}>{props.children}</NavLink>
}

export default NavLinkItem;