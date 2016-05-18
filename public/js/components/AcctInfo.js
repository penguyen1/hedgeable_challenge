'use strict'
import React from 'react'
import { Col, Row, Tab, Tabs } from 'react-bootstrap'         // any other modules???

// Components
const Assets = require('./Assets.js');              // account holdings table of stocks|cash
const GrowthChart = require('./GrowthChart.js');    // growth chart of balances|returns|*transactions*

// Displays Portfolio|Account Assets(table) & Investment Growth(line graph) 
const AcctInfo = React.createClass({
  renderTransactions(transactions) {
    // console.log('rendering transactions: ', transactions)        // works? -->Yes

    if(transactions.length){
      // renders list of collapsible transactions
      return (
        <Tab eventKey={3} title="Transactions"> 
          Date Picker module + collapsible list of panels for account transactions 
        </Tab>
      )
    } else {
      // no available transactions to render
      return <Tab eventKey={3} title="Transactions" disabled>No transactions</Tab>
    }
  },

  render() {
    return (
      <Row className="show-grid">
        <Col xs={9} md={6}>
          <Assets details={this.props.details.holdings} date={this.props.details.stats.firstDate} />
        </Col>
        <Col xs={9} md={6}>
          <Tabs defaultActiveKey={1} animation={false} id="growthChart-tabs">
            <Tab eventKey={1} title="Returns"> 
              <GrowthChart details={this.props.details.returns} title="Investment Returns" yAxis="(+/-) Returns" />
            </Tab>
            <Tab eventKey={2} title="Balances"> 
              <GrowthChart details={this.props.details.balances} title="Account Net Balance" yAxis="Total Value (USD)" />
            </Tab>
            {this.renderTransactions(this.props.records)}
          </Tabs>
        </Col>
      </Row>        
    )
  }
});

module.exports = AcctInfo;



