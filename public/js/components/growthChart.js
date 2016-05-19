'use strict'
import React from 'react'
import rd3 from 'rd3';
const LineChart = rd3.LineChart;
// const AreaChart = rd3.AreaChart;

// Displays Investment Growth of Asset returns|balances|transactions (over time)
var GrowthChart = React.createClass({
  getInitialState() {
    return {
      name: "",
      values: []
    }
  },

  componentWillMount() {
    this.setState({
      name: this.props.title,
      values: this.props.details
    });
  },

  render() {
    var arrayOfObjs = this.state.values.map(el => {
      var info = {}
      info['x'] = Date.parse(el.date)
      info['y'] = el.value
      return info
    });

    // console.log('this.state: ', this.state)
    var chartData = []
    var data = {}
    data.name = this.state.name
    data.values = arrayOfObjs
    chartData.push(data)
    // console.log('chartData: ', chartData[0])

    // need to display years on x-axis!
    return (
      <LineChart
        data={chartData}
        width="100%"
        height={400}
        viewBoxObject={{
          x: 0,
          y: 0,
          height: 400,
          width: 700
        }}
        title={this.state.name}
        xAxisTickInterval={{unit: 'year', interval: 2}}
        xAxisLabel="Time Interval (years)"
        yAxisLabel={this.props.yAxis}
        xAccessor={ (d) => d.x }
        yAccessor={ (d) => d.y } 
        gridHorizontal={true} />
    )
  }
});

module.exports = GrowthChart;

    // <AreaChart
    //   data={chartData}
    //   width="100%"
    //   height={400}
    //   viewBoxObject={{
    //     x: 0,
    //     y: 0,
    //     height: 400,
    //     width: 500
    //   }}
    //   title={this.state.name}
    //   xAxisTickInterval={{unit: 'year', interval: 2}}
    //   xAxisLabel="Date (Years)"
    //   yAxisLabel={this.props.yAxis}
    //   xAccessor={(d)=> {
    //     return new Date(d.date);
    //   }}
    //   yAccessor={(d)=>d.value} />