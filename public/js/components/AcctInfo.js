'use strict'
import React from 'react'
import { browserHistory, Router, Route, Link } from 'react-router'
import { Col, Row, Tab, Tabs } from 'react-bootstrap'         // any other modules???
var LineChart = require("react-chartjs").Line;
// import Chart from 'chart.js'
// Chart.defaults.global.responsive = true;

const Error = require('./404.js');
const Assets = require('./Assets.js');
// const Header = require('./Header.js');
// const GrowthChart = require('./components/GrowthChart.js');

const AcctInfo = React.createClass({
  // context data from parent component
  contextTypes: {
    token: React.PropTypes.string.isRequired,
    usertoken: React.PropTypes.string.isRequired,
    currentAssetID: React.PropTypes.number,
    setCurrentAssetID: React.PropTypes.func.isRequired,
    router: React.PropTypes.object.isRequired
  },

  getInitialState(){
    return{
      firstDate: "",
      lastDate: ""
    }
  },

  componentWillMount(){
    // console.log("checking context: ", this.context)
    console.log("checking AcctInfo props: ", this.props.details)
    // returns: this.props.details.returns
    // balances: this.props.details.balances
    this.setState({
      firstDate: this.props.details.stats.firstDate,
      lastDate: this.props.details.stats.lastDate,
    });
  },

  render(){
    return (
      <Row className="show-grid">
        <Col xs={10} md={7}>
          <Assets details={this.props.details.holdings} />
        </Col>
        <Col xs={8} md={5}>
          <Tabs defaultActiveKey={1} id="growthChart-tabs">
            <Tab eventKey={1} title="Returns"> 
              <LineChart data={data} width="600" height="250"/>
            </Tab>
            <Tab eventKey={2} title="Balances"> Growth Line Chart of Account Balances </Tab>
            <Tab eventKey={3} title="Transactions"> Date Picker for Account Transactions </Tab>
          </Tabs>
        </Col>
      </Row>
    )
  }
});

var data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [{
    label: "My First dataset",
    borderColor: "rgba(75,192,192,1)",
    data: [65, 59, 80, 81, 56, 55, 40],
  }]
};

module.exports = AcctInfo;