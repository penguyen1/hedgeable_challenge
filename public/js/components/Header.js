'use strict'
import React from 'react'
import { browserHistory, Router, Route, Link } from 'react-router'
import { PageHeader } from 'react-bootstrap'         // any other modules???

const Error = require('./404.js');
// const Assets = require('./components/Assets.js');
// const GrowthChart = require('./components/GrowthChart.js');

const Header = React.createClass({
  getInitialState(){
    return {
      name: "",
      currentBalance: "",
      hedgedPercentage: ""
    }
  },

  componentWillMount(){
    console.log("checking passed props: ", this.props.details)
    this.setState({
      name: this.props.details.account.name,
      currentBalance: this.props.details.latestBalance.toLocaleString(),
      hedgedPercentage: this.props.details.account.hedgedPercentage.toFixed(3)
    })
  },

  render(){
    return (
      <PageHeader>
        Account: {this.state.name}<br/>
        <small>Current balance: ${this.state.currentBalance}</small><br/>
        <small>Hedged percentage: {this.state.hedgedPercentage}%</small>
      </PageHeader>
    )
  }
});

module.exports = Header;