'use strict'
import React from 'react'
import { Col, Row, Tab, Tabs } from 'react-bootstrap'         // any other modules???

// Components
const Assets = require('./Assets.js');              // account holdings table of stocks|cash
const GrowthChart = require('./GrowthChart.js');    // growth chart of balances|returns|*transactions*
const baseURL = "https://api.hedgeable.com";        // base Hedgeable API URL

// Displays Portfolio|Account Assets(table) & Investment Growth(line graph) 
const AcctInfo = React.createClass({
  contextTypes: {
    token: React.PropTypes.string,
    usertoken: React.PropTypes.string,
    clientID: React.PropTypes.number,
    currentAcctID: React.PropTypes.number,
    firstDate: React.PropTypes.string
  },

  getInitialState() {
    return {
      transactions: []
    }
  },

  componentWillMount() {
    if(this.context.currentAcctID === 1) {
      // currently on main portfolio page - no transactions available
      console.log("Currently on Portfolio page - No transactions avail");
    } else {
      // Ajax call to get client account transactions
      $.ajax({
        url: `${baseURL}/client/${this.context.clientID}/account/${this.context.currentAcctID}/transactions?
          token=${this.context.token}&usertoken=${this.context.usertoken}&startdate=${this.context.firstDate}`,
        type: 'GET',
        dataType: 'json'
      }).done((data) => {
        console.log('Account transactions: ', data);      // CHECK if correct data is returned!
        // this.setState({ transactions: });
      });
    }
  },

  renderTransactions(transactions) {
    console.log('rendering transactions: ', transactions)        // works? (Yes-No)

    if(transactions.length){
      // renders list of collapsible transactions
      return (
        <Tab eventKey={3} title="Transactions"> 
          Date Picker module + collapsible list of panels for account transactions 
        </Tab>
      )
    } else {
      // no available transactions to render
      return <Tab eventKey={3} title="Transactions" disabled>No transactions here</Tab>
    }
  },

  render() {
    return (
      <Row className="show-grid">
        <Col xs={9} md={6}>
          <Assets details={this.props.details.holdings} />
        </Col>
        <Col xs={9} md={6}>
          <Tabs defaultActiveKey={1} animation={false} id="growthChart-tabs">
            <Tab eventKey={1} title="Returns"> 
              <GrowthChart details={this.props.details.returns} title="Investment Returns" yAxis="(+/-) Returns" />
            </Tab>
            <Tab eventKey={2} title="Balances"> 
              <GrowthChart details={this.props.details.balances} title="Account Net Balance" yAxis="Total Value (USD)" />
            </Tab>
            {this.renderTransactions(this.state.transactions)}
          </Tabs>
        </Col>
      </Row>        
    )
  }
});

module.exports = AcctInfo;



