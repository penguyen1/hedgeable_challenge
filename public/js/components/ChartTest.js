'use strict'
import React from 'react'
import { browserHistory, Router, Route, Link } from 'react-router'
import { PageHeader } from 'react-bootstrap'         // any other modules???

import rd3 from 'rd3';
// var rd3 = require('rd3');
const LineChart = rd3.LineChart;

var lineData = [{ 
      name: 'series1',
      values: [ { x: 0, y: 20 }, { x: 1, y: 30 }, { x: 2, y: 10 }, { x: 3, y: 5 }, { x: 4, y: 8 }, { x: 5, y: 15 }, { x: 6, y: 10 } ],
      strokeWidth: 3,
      strokeDashArray: "5,5",
    },
    { 
      name: 'series2',
      values : [ { x: 0, y: 8 }, { x: 1, y: 5 }, { x: 2, y: 20 }, { x: 3, y: 12 }, { x: 4, y: 4 }, { x: 5, y: 6 }, { x: 6, y: 2 } ]
    },
    {
      name: 'series3',
      values: [ { x: 0, y: 0 }, { x: 1, y: 5 }, { x: 2, y: 8 }, { x: 3, y: 2 }, { x: 4, y: 6 }, { x: 5, y: 4 }, { x: 6, y: 2 } ]
    }];

var ChartTest = React.createClass({
  getInitialState(){
    return{
      data: []
    }
  },

  componentWillMount(){
    console.log("passed props to Test component: ", this.props)

    // this.setState({
    //   data: this.props...
    // });
  },

  render() {
    return (
      <LineChart
        legend={true}
        data={lineData}
        width='100%'
        height={400}
        viewBoxObject={{
          x: 0,
          y: 0,
          width: 500,
          height: 400
        }}
        title="Line Chart Test"
        yAxisLabel="Value (USD)"
        xAxisLabel="Date (YYYY-MM-DD)"
        domain={{x: [,6], y: [-10,]}}
        gridHorizontal={true} />
    )
  }
});

// ReactDOM.render(
//   <ChartTest />,
//   document.getElementById('container')
// );

module.exports = ChartTest;