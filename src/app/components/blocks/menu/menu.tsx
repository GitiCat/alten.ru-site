import React from 'react'
import NavLinkItem from '../navLinkItem'
import { withRouter } from 'react-router-dom'

const Menu: React.FunctionComponent = () =>
	<div className="menu-block">
		<div className="nav-list">
			<NavLinkItem to='/'>Главная</NavLinkItem>
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


export default withRouter(Menu)
