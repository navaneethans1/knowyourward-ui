import React, { Component } from 'react';
import Filters from './components/Filters';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="app-container">
				<Filters />
			</div>
		);
	}
}

export default App;
