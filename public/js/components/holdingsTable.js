'use strict'
import React from 'react'
import { browserHistory, Router, Route, Link } from 'react-router'
import { Col, Grid, PageHeader, Row, Table } from 'react-bootstrap'         // any other modules???

const Error = require('./404.js');
// const ProfileInfo = require('./components/ProfileInfo.js');
// const HoldingsTable = require('./components/HoldingsTable.js');
// const GrowthChart = require('./components/GrowthChart.js');

const HoldingsTable = React.createClass({
  getInitialState(){
    return{}
  },

  // sets context from parent component
  contextTypes: {
    token: React.PropTypes.string.isRequired,
    usertoken: React.PropTypes.string.isRequired,
    portfolio: React.PropTypes.object.isRequired,
    router: React.PropTypes.object.isRequired,
  },

  componentWillMount(){
    console.log("checking... token: ", this.context.token)
    console.log("checking... usertoken: ", this.context.usertoken)
    console.log("checking... portfolio: ", this.context.portfolio)
    console.log("checking... router: ", this.context.router)
  },

  componentDidMount(){
    console.log("HoldingsTable component is mounted")
  },

  renderAsset(asset){
    return(
      <Asset key={} details={} />
      <Hunt key={hunt.hunt_id} details={hunt} deleteHunt={this.deleteHunt}/>
    )
  },

  render(){
    // return(
    //   <Col xs={9} md={6}>
    //     <Table responsive>
    //       <thead>
    //         <tr>
    //           <th>Title</th>
    //           <th>Ticker</th>
    //           <th>Shares</th>
    //           <th>Total Balance</th>
    //           <th>Portfolio percentage</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         <tr>
    //           <th>Stock A</th>
    //           <th>STKA</th>
    //           <th>1,000</th>
    //           <th>$400,000</th>
    //           <th>4.5%</th>
    //         </tr>
    //       </tbody>
    //     </Table>
    //   </Col>
    // )

    return(<div>HoldingsTable component info</div>)
  }
});

const Asset = React.createClass({
  getInitialState(){
    return{}
  },

  componentWillMount(){},

  componentDidMount(){},

  render(){
    return();
  }
})

module.exports = HoldingsTable;