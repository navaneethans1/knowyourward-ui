import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Filters from './components/Filters';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="app-container">
				<Navbar />
				<Filters />
			</div>
		);
	}
}

export default App;
