'use strict'
import React from 'react'
import { browserHistory, Router, Route, Link } from 'react-router'
import { Table } from 'react-bootstrap'         // any other modules???

// Components
// const AssetProfile = require('./AssetProfile.js');

// Displays all asset investments of User's Portfolio & Accounts
const Assets = React.createClass({
  componentWillMount() {
    // console.log('Assets - current props: ', this.props);
  },

  renderAsset(asset) {
    // changes Cash securityID from 0 to 1393 
    // asset.security.id = (asset.security.id < 1 ? 1393 : asset.security.id);
    // console.log("rendering asset: ", asset)
    return <AssetInfo key={asset.security.id} details={asset} date={this.props.date} acctID={this.props.id} />
  },

  render() {
    return (
      <Table striped condensed hover responsive>
        <thead>
          <tr>
            <th style={{textAlign:'center', fontSize:'16px'}}>Name</th>
            <th style={{textAlign:'center', fontSize:'16px'}}>Quantity</th>
            <th style={{textAlign:'center', fontSize:'16px'}}>Price per Share</th>
            <th style={{textAlign:'center', fontSize:'16px'}}>Portfolio Percentage</th>
            <th style={{textAlign:'center', fontSize:'16px'}}>Total Balance</th>
          </tr>
        </thead>
        <tbody>
          {this.props.details.map( (el)=>this.renderAsset(el) )}
        </tbody>
      </Table>
    )
  }
});

// Asset investment information (per table row)
const AssetInfo = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
    setCurrentSecurityID: React.PropTypes.func,
    setStartDate: React.PropTypes.func,
    setAcctID: React.PropTypes.func
  },

  handleClick(event) {
    event.preventDefault();

    // saves asset accountID, securityID and startDate to this.context
    this.context.setCurrentSecurityID(this.props.details.security.id);
    this.context.setStartDate(this.props.date);
    this.context.setAcctID(this.props.acctID);
    console.log("rendering profile of securityID: ", this.props.details.security.id);
    console.log("storing new startDate: ", this.props.date);
    console.log("storing Account ID: ", this.props.acctID);

    // redirects to AssetProfile component
    this.context.router.replace('/assetProfile');
  },

  render() {
    var pricePerShare = this.props.details.amount/this.props.details.shares;
    return (
      <tr key={this.props.details.security.id} onClick={this.handleClick}>
        <td>{this.props.details.security.name}</td>
        <td>{this.props.details.shares.toFixed(2)}</td>
        <td>${isNaN(pricePerShare) ? "0.00" : pricePerShare.toFixed(2)}</td>
        <td>{(this.props.details.weight*100).toFixed(2)}%</td>
        <td>${this.props.details.amount.toFixed(2)}</td>
      </tr>
    )
  }
});

module.exports = Assets;



