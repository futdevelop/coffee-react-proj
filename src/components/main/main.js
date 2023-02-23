import './main.scss';

function Main() {
	return (
		<div className='main'>
			<h1 className='main-title'>Everything You Love About Coffee</h1>
			<div className="main-decor">
				<img src="/images/main-decor.png" alt="coffee"/>
				<span></span><span></span>
			</div>
			<h2 className='main-text'>We makes every day full of energy and taste</h2>
			<h2 className='main-prep'>Want to try our beans?</h2>
			<a href='#' className='main-btn'>More</a>
		</div>
	)
}

export default Main;
