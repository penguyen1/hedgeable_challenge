'use strict'
import React from 'react'
import { browserHistory, Router, Route, Link } from 'react-router'
import { Col, Grid, PageHeader, Row, Table } from 'react-bootstrap'         // any other modules???

const Error = require('./404.js');
// const ProfileInfo = require('./components/ProfileInfo.js');
// const HoldingsTable = require('./components/HoldingsTable.js');
// const GrowthChart = require('./components/GrowthChart.js');

const ProfileInfo = React.createClass({
  getInitialState(){
    return{}
  },

  // sets context from parent component
  contextTypes: {
    user: React.PropTypes.object,
    router: React.PropTypes.object.isRequired,
    setCurrentHuntId: React.PropTypes.func
  },

  componentWillMount(){},

  componentDidMount(){},

  renderAsset(asset){
    return(
      <Asset key={} details={} />
      <Hunt key={hunt.hunt_id} details={hunt} deleteHunt={this.deleteHunt}/>
    )
  },

  render(){
    return(

    )
  }
});

// const Asset = React.createClass({
//   getInitialState(){
//     return{}
//   },
//   componentWillMount(){},
//   componentDidMount(){},
//   render(){
//     return();
//   }
// });

module.exports = ProfileInfo;