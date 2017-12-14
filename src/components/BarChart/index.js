import React, { Component } from 'react';
import Plottable from 'plottable';

class BarChart extends Component {
	componentDidMount() {
		var data = [
			{ x: 1, y: 1 },
			{ x: 2, y: 3 },
			{ x: 3, y: 2 },
			{ x: 4, y: 4 },
			{ x: 5, y: 3 },
			{ x: 6, y: 5 }
		];

		var xScale = new Plottable.Scales.Linear();
		var yScale = new Plottable.Scales.Linear();

		var plot = new Plottable.Plots.Bar()
			.addDataset(new Plottable.Dataset(data))
			.x(function(d) {
				return d.x;
			}, xScale)
			.y(function(d) {
				return d.y;
			}, yScale)
			.animated(true)
			.renderTo('div#chart');

		window.addEventListener('resize', function() {
			plot.redraw();
		});
	}
	render() {
		return <div id="chart" />;
	}
}

export default BarChart;
