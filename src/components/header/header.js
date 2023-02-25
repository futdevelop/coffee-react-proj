import './header.scss';

function Header() {
	return (
		<div className='header'>
			<div className="header-bg"><img src="/images/main-bg.png" alt="bg" /></div>
			<div className="header-logo"><img src="/images/header-logo.png" alt="beans" /></div>
			<ul className="header-menu">
				<li className="header-items"><a href="/about">Coffee house</a></li>
				<li className="header-items"><a href="">Our coffee</a></li>
				<li className="header-items"><a href="">For your pleasure</a></li>
			</ul>
		</div>
	)
}

export default Header;
