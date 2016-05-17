'use strict'
import React from 'react'
import { browserHistory, Router, Route, Link } from 'react-router'
import { Col, Grid, PageHeader, Row, Table } from 'react-bootstrap'         // any other modules???

const Error = require('./404.js');
// const Profile = require('./components/Profile.js');
// const GrowthChart = require('./components/GrowthChart.js');

const Assets = React.createClass({
  // context data from parent component
  contextTypes: {
    token: React.PropTypes.string.isRequired,
    usertoken: React.PropTypes.string.isRequired,
    setCurrentAssetID: React.PropTypes.func.isRequired,
    router: React.PropTypes.object.isRequired
  },

  getInitialState(){
    return{
      asset: {}
    }
  },

  componentWillMount(){
    // console.log("checking... router: ", this.context.router)
    console.log("checking... token: ", this.context)
    console.log("checking... asset: ", this.props.details)
  },

  viewProfile(event){
    event.preventDefault();
    console.log("viewing profile of Asset id: ", this.props.details.security.id);
    this.context.setCurrentAssetID(this.props.details.security.id);
    // this.context.router.replace('/profile');
  },

  render(){
    return(
      <tr key={this.props.details.security.id} onClick={this.viewProfile}>
        <td>{this.props.details.security.name}</td>
        <td>{this.props.details.security.ticker}</td>
        <td>{this.props.details.shares.toFixed(2)}</td>
        <td>${(this.props.details.amount/this.props.details.shares).toFixed(2)}</td>
        <td>{(this.props.details.weight*100).toFixed(2)}%</td>
        <td>${this.props.details.amount.toFixed(2)}</td>
      </tr>
    )
  }
});

module.exports = Assets;