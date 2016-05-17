'use strict'
import React from 'react'
import { browserHistory, Router, Route, Link } from 'react-router'
import { Col, Grid, PageHeader, Row, Table } from 'react-bootstrap'         // any other modules???

const Error = require('./404.js');
// const ProfileInfo = require('./components/ProfileInfo.js');
// const GrowthChart = require('./components/GrowthChart.js');

const Assets = React.createClass({
  // context data from parent component
  contextTypes: {
    token: React.PropTypes.string.isRequired,
    usertoken: React.PropTypes.string.isRequired,
    // portfolio: React.PropTypes.object.isRequired,
    router: React.PropTypes.object.isRequired,
  },

  getInitialState(){
    return{
      asset: {}
    }
  },

  componentWillMount(){
    // console.log("checking... router: ", this.context.router)
    console.log("checking... token: ", this.context)
    console.log("checking... asset: ", this.props.details)
  },

  componentDidMount(){
    console.log("Assets component is mounted")
  },

  renderAsset(asset){
      // <Asset key={} details={} />
      // <Hunt key={hunt.hunt_id} details={hunt} deleteHunt={this.deleteHunt}/>
    // return(<div>hi from renderAsset</div>)
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

    return(<div>Assets component info</div>)
  }
});

module.exports = Assets;