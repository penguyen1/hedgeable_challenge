'use strict'
import React from 'react'
import { browserHistory, Router, Route, Link } from 'react-router'
import { PageHeader } from 'react-bootstrap'         // any other modules???

const Error = require('./404.js');
// const Assets = require('./components/Assets.js');
// const GrowthChart = require('./components/GrowthChart.js');

const Header = React.createClass({
  componentWillMount(){
    // console.log("checking... router: ", this.context.router)
    // console.log("checking context: ", this.context)
    console.log("checking passed props: ", this.props.details)
    // console.log("checking currentAssetID: ", this.context.currentAssetID)
  },

  render(){
    return (
      <PageHeader>
        {this.props.details.account.name}<br/>
        <small>Current balance: ${this.props.details.latestBalance.toLocaleString()}</small><br/>
        <small>Hedged percentage: {this.props.details.account.hedgedPercentage.toFixed(3)}%</small>
      </PageHeader>
    )
  }
});

module.exports = Header;