'use strict'
import React from 'react'
import { browserHistory, Router, Route, Link } from 'react-router'
import { Col, Grid, PageHeader, Row, Table } from 'react-bootstrap'         // any other modules???

// use D3 here!!!


const Error = require('./404.js');
// const Profile = require('./components/Profile.js');
// const Assets = require('./components/Assets.js');
// const GrowthChart = require('./components/GrowthChart.js');

const GrowthChart = React.createClass({
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

module.exports = GrowthChart;