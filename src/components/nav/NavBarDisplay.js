import React from 'react';
import {Link, NavLink} from 'react-router-dom'; 

export const NavBarDisplay = (props) => (

	<nav className="nav-bar">
		<Link 
			className="no-activo"
			activeClassName="activo"
			to="/">
			Inicio
		</Link>
		<NavLink 
			className="no-activo"
			activeClassName="activo"
			to="/perfil">
			Perfiles
		</NavLink>
	</nav>

	);