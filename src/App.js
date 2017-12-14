import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Filters from './components/Filters';
import Question from './components/Question';
import './App.css';
import 'plottable/plottable.css';

class App extends Component {
	render() {
		return (
			<div className="app-container">
				<Navbar />
				<Filters />
				<section className="question-cards-container">
					<Question />
				</section>
			</div>
		);
	}
}

export default App;
