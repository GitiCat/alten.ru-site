import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import classNames from 'classnames';

const NavLinkItem = (props: NavLinkProps) => {
    var itemClasses = classNames({
        'nav-item': true,
        [props.className]: props.className != undefined
    });
    return <NavLink activeClassName='current' className={itemClasses} to={props.to}>{props.children}</NavLink>
}

export default NavLinkItem;