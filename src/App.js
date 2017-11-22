import React, { Component } from 'react';
import Filter from './components/Filter';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Filter
					items={['Apple', 'orange', 'carrot']}
					onChange={selectedItem => console.log(selectedItem)}
				/>
			</div>
		);
	}
}

export default App;
