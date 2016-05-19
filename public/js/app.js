'use strict'
import React from 'react'
import { render, ReactDOM } from 'react-dom'
import { browserHistory, IndexRedirect, Router, Route, Link } from 'react-router'
import { Col, Grid, Jumbotron, PageHeader, Row, Tab, Tabs } from 'react-bootstrap'

// Components
const Error = require('./components/404.js');
const Assets = require('./components/Assets.js');
const AcctInfo = require('./components/AcctInfo.js');
const Header = require('./components/Header.js');
const Home = require('./components/Home.js');
const GrowthChart = require('./components/GrowthChart.js');
const AssetProfile = require('./components/AssetProfile.js');
const baseURL = "https://api.hedgeable.com";    // base Hedgeable API URL

// Root Component
const App = React.createClass({
  getInitialState() {
    return {
      token: "",
      usertoken: "",
      clientID: 0,    
      accountID: 1,
      currentSecurityID: 0,
      startDate: "",
      loading: true
    }
  },

  // data passed to child components
  childContextTypes: {
    token: React.PropTypes.string,
    usertoken: React.PropTypes.string,
    clientID: React.PropTypes.number,
    accountID: React.PropTypes.number,
    setAcctID: React.PropTypes.func,
    currentSecurityID: React.PropTypes.number,
    setCurrentSecurityID: React.PropTypes.func,
    startDate: React.PropTypes.string,
    setStartDate: React.PropTypes.func   
  },

  getChildContext() {
    return {
      token: this.state.token,
      usertoken: this.state.usertoken,
      clientID: this.state.clientID,
      accountID: this.state.accountID,
      setAcctID: this.setAcctID,
      currentSecurityID: this.state.currentSecurityID,
      setCurrentSecurityID: this.setCurrentSecurityID,
      startDate: this.state.startDate,
      setStartDate: this.setStartDate
    }
  },

  setCurrentSecurityID(id) { 
    this.setState({ currentSecurityID: id })
  },

  setStartDate(date) { 
    this.setState({ startDate: date })
  },

  setAcctID(id) { 
    this.setState({ accountID: id })
  },

  componentWillMount() {
    // confirm & gets API Partner {token}
    $.ajax({
      url: `${baseURL}/authenticate?username=hedgeable-demo&key=abdluih2908uhb23ovboy39841hbf`,
      type: 'POST',
      dataType: 'json'
    }).done((data) => {
      // console.log('API Partner token: ', data.response)
      this.setState({ token: data.response })     // API Partner authorization {token}

      // authenticate & gets client {usertoken}
      $.ajax({
        url: `${baseURL}/client/login?token=${this.state.token}&email=apidemo@hedgeable.com&password=gethedged`,
        type: 'POST',
        dataType: 'json'
      }).done((data) => {
        // console.log('Client {usertoken}: ', data.response)   
        this.setState({ 
          usertoken: data.response.token,   // client {usertoken}
          clientID: data.response.id        // clientID 
        }); 
      });
    });
  },

  // delays render() - allows returning API data to be completed
  componentDidMount() {
    var self = this;
    setTimeout(() => {
      self.setState({ loading: false })       
    }, 1000);
  },

  render() {
    if(this.state.loading){
      return (
        <div id="container-bg">
          <h1 style={{marginTop:'200px'}}>Helloo Handsome!</h1>
        </div>
      )
    } else {
      return (
        <div id="container-bg">
          {this.props.children || <Home />}
        </div>
      )
    }
  }
});

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/home" component={Home} />
      <Route path="/assetProfile" component={AssetProfile} />
      <Route path="/acctInfo" component={AcctInfo} />
      <Route path="/assets" component={Assets} />
      <Route path="/growthChart" component={GrowthChart} />
      <Route path="/header" component={Header} />
    </Route>
    <Route path="*" component={Error} />
  </Router>
), document.getElementById('container'));

