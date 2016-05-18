'use strict'
import React from 'react'
import { Col, Grid, PageHeader, Row, Table } from 'react-bootstrap'         // any other modules???

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

  componentDidMount() {},

  render() {
  console.log("Hello from AssetProfile!!")
    return (
      <div>
        <h1>currently in AssetProfile Component!</h1>
        <div>growthChart (balances, returns); stats: firstDate & lastDate</div>
      </div>
    )
  }
});

module.exports = AssetProfile;