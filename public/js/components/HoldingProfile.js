'use strict'
import React from 'react'
import { browserHistory, Router, Route, Link } from 'react-router'
import { Col, Grid, PageHeader, Row, Table } from 'react-bootstrap'         // any other modules???

const Error = require('./404.js');
// const Assets = require('./components/Assets.js');
// const GrowthChart = require('./components/GrowthChart.js');

const Holding = React.createClass({
  // context data from parent component
  contextTypes: {
    token: React.PropTypes.string.isRequired,
    usertoken: React.PropTypes.string.isRequired,
    currentAssetID: React.PropTypes.number,
    setCurrentAssetID: React.PropTypes.func.isRequired,
    router: React.PropTypes.object.isRequired
  },

  getInitialState(){
    return{}
  },

  componentWillMount(){
    // console.log("checking... router: ", this.context.router)
    console.log("checking context: ", this.context)
    // console.log("checking passed props: ", this.props.details)
    // console.log("checking currentAssetID: ", this.context.currentAssetID)
  },

  componentDidMount(){},

  render(){
    return (
      <div>
        <h4>currently in Holding Component!</h4>
        <div>Holding Info (total amount, quantity, market price, initial purchase price, weight, assetClass, name, ticker)</div>
        <div>growthChart (balances, returns); stats: firstDate & lastDate</div>
      </div>
    )
  }
});

// const Asset = React.createClass({
//   getInitialState(){
//     return{}
//   },
//   componentWillMount(){},
//   componentDidMount(){},
//   render(){
//     return();
//   }
// });

module.exports = Holding;