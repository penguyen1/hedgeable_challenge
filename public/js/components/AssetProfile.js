'use strict'
import React from 'react'
import { browserHistory, Router, Route, Link } from 'react-router'
import { Jumbotron } from 'react-bootstrap'         // any other modules???

// Components
const Assets = require('./Assets.js');              // account holdings table of stocks|cash
const GrowthChart = require('./GrowthChart.js');    // growth chart of balances|returns|*transactions*

// Displays current Asset information
const AssetProfile = React.createClass({
  contextTypes: {
    token: React.PropTypes.string,
    usertoken: React.PropTypes.string,
    clientID: React.PropTypes.number,
    currentSecurityID: React.PropTypes.number,
    startDate: React.PropTypes.string
  },

  getInitialState() {
    return{}
  },

  componentWillMount() {
    console.log("AssetProfile - checking props: ", this.props)
  },

  // componentDidMount() {},

  render() {
    return (
      <Jumbotron>
        <h1>Hello from within AssetProfile Component!!</h1>
        <p>growthChart (balances, returns); stats: firstDate & lastDate</p>
        <p>Hmm... I think something went wrong here..</p>
      </Jumbotron>
    )
  }
});

module.exports = AssetProfile;