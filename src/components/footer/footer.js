import './footer.scss';

const Footer = () => {
	return (
		<div className='footer'>
		<div className="footer-top">
				<div className="footer-logo"><img src="/images/footer-logo.png" alt="beans" /></div>
				<ul className="footer-menu">
					<li className="footer-items">Coffee house</li>
					<li className="footer-items">Our coffee</li>
					<li className="footer-items">For your pleasure</li>
				</ul>
		</div>
			<div className="footer-decor">
				<img src="/images/decor.png" alt="coffee" />
				<span></span><span></span>
			</div>
		</div>		
	)
}

export default Footer;