import './card-list.scss';

import CardItem from '../card-item/card-item';

const CardList = ({data}) => {
	const elements = data.map(item => {
		const { id, ...items } = item;

		return (
			<CardItem 
				key={id}
				{...items}/>
		)
	})
		return (
			<div className='card-list'>
				<div className="card-list-bg"><img src="/images/cards-bg.png" alt="cards-bg" /></div>
				<div className="card-list-title">Our best</div>
				<div className="card-list-cards">
					{elements}
				</div>
			</div>
		)
}

export default CardList;