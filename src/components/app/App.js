import { Component } from 'react';

import Header from '../header/header';
import Main from '../main/main';
import About from '../about/about';
import CardList from '../card-list/card-list';
import Footer from '../footer/footer';

import './App.scss';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [
				{ img: '/images/card-logo1.png', title: 'Solimo Coffee Beans 2 kg', price: 10.73, id: 1 },
				{ img: '/images/card-logo2.png', title: 'Presto Coffee Beans 1 kg', price: 15.99, id: 2 },
				{ img: '/images/card-logo3.png', title: 'AROMISTICO Coffee 1 kg', price: 6.99, id: 3 }
			]
		}
	}
	render() {
		const { data } = this.state;
		return (
			<div className='app'>
				<Header />
				<Main />
				<About />
				<CardList data={data}/>
				<Footer />
			</div>
		)
	}
}

export default App;
