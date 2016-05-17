'use strict'
import React from 'react'
import { browserHistory, Router, Route, Link } from 'react-router'
import { Table } from 'react-bootstrap'         // any other modules???

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

  componentWillMount(){
    // console.log("checking... router: ", this.context.router)
    // console.log("checking... token: ", this.context)
    // console.log("checking... asset: ", this.props.details)
  },

  // viewProfile(event){
  //   event.preventDefault();
  //   console.log("viewing profile of Asset id: ", this.props.details.security.id);
  //   // this.context.setCurrentAssetID(this.props.details.security.id);
  //   // this.context.router.replace('/profile');
  // },

  renderAsset(asset){
    // converts Cash security id from 0 to 1393 
    asset.security.id < 1 ? asset.security.id = 1393 : asset.security.id;
    // console.log("rendering asset id: ", asset.security.id)
    
    // console.log("rendering asset: ", asset)
    return (
      <AssetInfo key={asset.security.id} details={asset}/>
    )
  },

  render(){
    return (
      <Table striped condensed hover responsive>
        <thead>
          <tr>
            <th style={{textAlign:'center'}}>Name</th>
            <th style={{textAlign:'center'}}>Ticker</th>
            <th style={{textAlign:'center'}}>Quantity</th>
            <th style={{textAlign:'center'}}>Market Value</th>
            <th style={{textAlign:'center'}}>Portfolio percentage</th>
            <th style={{textAlign:'center'}}>Total</th>
          </tr>
        </thead>
        <tbody>
          {this.props.details.map( el => this.renderAsset(el) )}
        </tbody>
      </Table>
    )
  }
});

const AssetInfo = React.createClass({
  contextTypes: {
    setCurrentAssetID: React.PropTypes.func.isRequired,
    router: React.PropTypes.object.isRequired
  },

  componentWillMount(){
    // console.log("checking... router: ", this.context.router)
    // console.log("checking context: ", this.context)
    // console.log("checking passed props: ", this.props.details)
  },

  handleClick(event){
    event.preventDefault();
    console.log("asset security id clicked: ", this.props.details.security.id)
    this.context.setCurrentAssetID(this.props.details.security.id);
    // this.context.router.replace('/profile');
  },

  render(){
    return (
      <tr key={this.props.details.security.id} onClick={this.handleClick}>
        <td>{this.props.details.security.name}</td>
        <td>{this.props.details.security.ticker}</td>
        <td>{this.props.details.shares.toFixed(2)}</td>
        <td>${isNaN(this.props.details.amount/this.props.details.shares)
                ? "0.00"
                : (this.props.details.amount/this.props.details.shares).toFixed(2)}</td>
        <td>{(this.props.details.weight*100).toFixed(2)}%</td>
        <td>${this.props.details.amount.toFixed(2)}</td>
      </tr>
    )
  }
});

module.exports = Assets;