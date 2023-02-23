import Header from '../header/header';
import Main from '../main/main';
import About from '../about/about';
import './App.scss';

function App() {
  return (
		<div className='app'>
			<Header/>
			<Main />
			<About />
		</div>
	)
}

export default App;
