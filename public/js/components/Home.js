'use strict'
import React from 'react'
import { browserHistory, IndexRoute, Router, Route, Link } from 'react-router'
import { Col, Grid, Jumbotron, PageHeader, Row, Tab, Tabs } from 'react-bootstrap'

// Components
const AcctInfo = require('./AcctInfo.js');
const Header = require('./Header.js');
const baseURL = "https://api.hedgeable.com";    // base Hedgeable API URL

// Home component
const Home = React.createClass({
  contextTypes: {
    token: React.PropTypes.string,
    usertoken: React.PropTypes.string,
    clientID: React.PropTypes.number,
    currentSecurityID: React.PropTypes.number,
    setCurrentSecurityID: React.PropTypes.func,
    startDate: React.PropTypes.string,
    setStartDate: React.PropTypes.func   
  },

  getInitialState() {
    return {
      portfolio: {},
      loading: true
    }
  },

  componentWillMount() {
    console.log('token: ', this.context.token)
    console.log('usertoken: ', this.context.usertoken)
    console.log('clientID: ', this.context.clientID)
    console.log('currentSecurityID: ', this.context.currentSecurityID)
    console.log('startDate: ', this.context.startDate)

    // gets ALL client portfolio & account info & investments
    $.ajax({
      url: `${baseURL}/client/${this.context.clientID}/getallinformation?token=${this.context.token}&usertoken=${this.context.usertoken}`,
      type: 'GET',
      dataType: 'json'
    }).done((data) => {
      console.log('Entire client portfolio: ', data.response)
      this.setState({ portfolio: data.response },
        function() {
          console.log('this.state: ', this.state)
        })
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
          <h3>Loading...</h3>
        </div>
      )
    } else {
      return (
        <Grid>
          <Jumbotron style={{height:'205px'}}>
            <h1 style={{marginTop:'-10px'}}> Hello, {this.state.portfolio.client.firstName}! </h1>
            <p>For more details, click on the tabs or list of assets below!</p>
          </Jumbotron>
          
          <Tabs defaultActiveKey={1} animation={false} id="account-tabs">
            <Tab eventKey={1} title="My Portfolio">
              <PageHeader> Account Portfolio<br/>
                <small style={{fontSize:'20px'}}>Current balance: ${this.state.portfolio.latestBalance.toLocaleString()}</small><br/>
                <small style={{fontSize:'20px'}}>Hedged percentage: {this.state.portfolio.hedgedPercentage.toFixed(3)}%</small>
              </PageHeader>
              <AcctInfo details={this.state.portfolio.balances} records={[]} />       
            </Tab>

            {this.state.portfolio.accountsInfo.map((el) =>
              <Tab key={el.account.id} eventKey={el.account.id} title={el.account.name.split(' ').slice(1).join(' ')}> 
                <Header details={el} />
                <AcctInfo details={el.balances} records={el.transactions} />
              </Tab> 
            )}
          </Tabs>
        </Grid>
      )
    }
  }
});


module.exports = Home;

