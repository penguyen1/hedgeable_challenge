'use strict'
import React from 'react'
import { browserHistory, Router, Route, Link } from 'react-router'
import { Collapse, Panel, Table, Well } from 'react-bootstrap'         // any other modules???

// Components
const AssetProfile = require('./AssetProfile.js');

// Displays all asset investments of User's Portfolio & Accounts
const Assets = React.createClass({
  // contextTypes: {
  //   router: React.PropTypes.object.isRequired
  // },

  // viewProile(event) {
  //   event.preventDefault();
  //   this.context.router.replace('/assetProfile');
  // },

  componentWillMount() {
    // var routes = Router.getCurrentRoutes()
    // console.log('Assets - currentRoutes', routes)
    // console.log('Assets - currentRoutes', routes)
  },

  renderAsset(asset) {
    // changes Cash securityID from 0 to 1393 
    asset.security.id = (asset.security.id < 1 ? 1393 : asset.security.id);
    // console.log("checking asset id: ", asset.security.id)
    // console.log("rendering asset: ", asset)
    return <AssetInfo key={asset.security.id} details={asset} date={this.props.date} viewProile={this.viewProile} />
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
    setStartDate: React.PropTypes.func
  },

  // getInitialState() {
  //   return {}
  //   // open: false    // for collapsible Transactions
  // },

  handleClick(event) {
    event.preventDefault();
    this.context.setCurrentSecurityID(this.props.details.security.id);
    this.context.setStartDate(this.props.date);
    console.log("rendering profile of securityID: ", this.props.details.security.id);
    console.log("storing new startDate: ", this.props.date);
    // console.log("asset clicked: ", this.props.details)      // ajax + this.context.currentSecurityID
    
    console.log('omw to AssetProfile! ', this.context.router)
    this.context.router.replace('/assetProfile');
    // this.setState({ open: !this.state.open });      // toggles collapsible panel for Transactions data
  },

  render() {
    var pricePerShare = this.props.details.amount/this.props.details.shares;
    // console.log('this.props: ', this.props)
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


// const CollapsibleInfo = React.createClass({
//   getInitialState() {
//     return {
//       open: false
//     }
//   },
// 
//   handleClick(event) {
//     event.preventDefault();
//     console.log("asset security id clicked: ", this.props.details.security.id)
//     // this.context.setCurrentSecurityID(this.props.details.security.id);
//     // this.context.router.replace('/assetProfile');
// 
//     this.setState({ open: !this.state.open });
//   },
// 
//   render() {
//     return (
//       <tr key={this.props.details.security.id} onClick={this.handleClick}>
//         <td colSpan="5">
//           <Collapse in={this.state.open}>
//             <div>
//               <Well>
//                 Hello!
//               </Well>
//             </div>
//           </Collapse>
//         </td>
//       </tr>
//     )
//   }
// });