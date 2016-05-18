'use strict'
import React from 'react'
import { Col, Row, Tab, Tabs } from 'react-bootstrap'         // any other modules???

// Components
const Assets = require('./Assets.js');              // account holdings table of stocks|cash
const GrowthChart = require('./GrowthChart.js');    // growth chart of balances|returns|*transactions*

// Displays Portfolio|Account Assets(table) & Investment Growth(line graph) 
const AcctInfo = React.createClass({
  // context data from parent component
  // contextTypes: {
  //   token: React.PropTypes.string.isRequired,
  //   usertoken: React.PropTypes.string.isRequired,
  //   currentAssetID: React.PropTypes.number,
  //   setCurrentAssetID: React.PropTypes.func.isRequired,
  //   router: React.PropTypes.object.isRequired
  // },

  getInitialState() {
    return {
      firstDate: "",
      lastDate: ""
    }
  },

  componentWillMount() {
    this.setState({
      firstDate: this.props.details.stats.firstDate,
      lastDate: this.props.details.stats.lastDate,
    });
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
            <Tab eventKey={3} title="Transactions"> 
              Date Picker module for record list of Account Transactions 
            </Tab>
          </Tabs>
        </Col>
      </Row>
    )
  }
});

module.exports = AcctInfo;



