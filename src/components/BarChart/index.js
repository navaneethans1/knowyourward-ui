import React, { Component } from "react";
import Plottable from "plottable";

class BarChart extends Component {
  componentDidMount() {
    const { data, id } = this.props;

    var xScale = new Plottable.Scales.Category();
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
      .labelsEnabled(true)
      .renderTo(`div#chart-${id}`);

    window.addEventListener("resize", function() {
      plot.redraw();
    });
  }
  render() {
    return <div id={`chart-${this.props.id}`} />;
  }
}

export default BarChart;
