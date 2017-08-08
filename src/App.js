import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

import './styles/menu.css';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Menu>
					<Link id="home" className="menu-item" to="/">Home</Link>
					<Link id="fuel" className="menu-item" to="/fuel">Fuel</Link>
					<Link id="reports" className="menu-item" to="/reports">Reports</Link>
					<div className="menu-footer-text">v0.1.0</div>
				</Menu>
				<Main />
			</div>
		);
	}
}

export default App;
