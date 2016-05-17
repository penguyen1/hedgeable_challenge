'use strict'
import React from 'react'
import { browserHistory, Router, Route, Link } from 'react-router'
import { Col, Grid, PageHeader, Row, Table } from 'react-bootstrap'         // any other modules???

const Error = require('./404.js');
// const Assets = require('./components/Assets.js');
// const GrowthChart = require('./components/GrowthChart.js');

const Profile = React.createClass({
  // context data from parent component
  contextTypes: {
    token: React.PropTypes.string.isRequired,
    usertoken: React.PropTypes.string.isRequired,
    currentAssetID: React.PropTypes.number,
    setCurrentAssetID: React.PropTypes.func.isRequired,
    router: React.PropTypes.object.isRequired
  },

  getInitialState(){
    return{}
  },

  componentWillMount(){
    // console.log("checking... router: ", this.context.router)
    console.log("checking context: ", this.context)
    console.log("checking passed props: ", this.props.data)
    // console.log("checking currentAssetID: ", this.context.currentAssetID)
  },

  componentDidMount(){},

  render(){
    return (
      <h4>currently in Profile Component!</h4>
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

module.exports = Profile;