import './header.scss';

function Header() {
	return (
		<div className='header'>	
			<div className="header-bg"><img src="/images/main-bg.png" alt="bg" /></div>
			<div className="header-logo"><img src="/images/header-logo.png" alt="beans" /></div>
			<ul className="header-menu">
				<li className="header-items">Coffee house</li>
				<li className="header-items">Our coffee</li>
				<li className="header-items">For your pleasure</li>
			</ul>
		</div>
	)
}

export default Header;
