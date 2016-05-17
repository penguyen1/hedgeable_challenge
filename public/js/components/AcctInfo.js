'use strict'
import React from 'react'
import { browserHistory, Router, Route, Link } from 'react-router'
import { Col, Row } from 'react-bootstrap'         // any other modules???

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
    console.log("checking passed props: ", this.props.details)
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
        <Col xs={8} md={5}>accountGrowthChart here</Col>
      </Row>
    )
  }
});

module.exports = AcctInfo;