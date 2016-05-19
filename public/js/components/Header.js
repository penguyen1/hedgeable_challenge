'use strict'
import React from 'react'
import { PageHeader } from 'react-bootstrap'         // any other modules???

// Displays info of user's Portfolio & contributing Accounts
const Header = React.createClass({
  getInitialState(){
    return {
      name: "",
      currentBalance: "",
      hedgedPercentage: ""
    }
  },

  componentWillMount(){
    // console.log("checking Header props: ", this.props.details)
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
        <small style={{fontSize:'21px'}}>Current balance: ${this.state.currentBalance}</small><br/>
        <small style={{fontSize:'21px'}}>Hedged percentage: {this.state.hedgedPercentage}%</small>
      </PageHeader>
    )
  }
});

module.exports = Header;