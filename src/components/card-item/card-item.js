import './card-item.scss';

const CardItem = props => { 
	const { img, title, price } = props;
	return (
		<li className='card-item'>
			<div className="card-item-logo"><img src={img} alt="" /></div>
			<div className="card-item-title">{title}</div>
			<div className="card-item-price">{price + '$'}</div>
		</li>
	)
}

export default CardItem;