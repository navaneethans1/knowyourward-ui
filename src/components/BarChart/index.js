import React, { Component, Fragment } from "react";
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

    var axis = new Plottable.Axes.Category(xScale, "bottom")
      .yAlignment("center")
      .renderTo(`div#axes-${id}`);

    window.addEventListener("resize", function() {
      plot.redraw();
      axis.redraw();
    });
  }
  render() {
    return (
      <Fragment>
        <div
          id={`chart-${this.props.id}`}
          className="plottable-chart-container"
        />
        <div
          id={`axes-${this.props.id}`}
          className="plottable-axis-container"
        />
      </Fragment>
    );
  }
}

export default BarChart;
