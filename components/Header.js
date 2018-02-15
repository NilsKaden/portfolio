import React from 'react';

const Header = () =>{
	return(
		<div className="pure-menu pure-menu-horizontal">
			<a href="/" class="pure-menu-heading pure-menu-link">Nils Kaden</a>
			<ul className="pure-menu-list">
				<li className="pure-menu-item"><a href="./portfolio" className="pure-menu-link">Portfolio</a></li>
				<li className="pure-menu-item"><a href="./contact" className="pure-menu-link">Contact</a></li>
			</ul>
		</div>
	)
}


export default Header;