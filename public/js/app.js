'use strict'
import React from 'react'
import { render, ReactDOM } from 'react-dom'
import { browserHistory, Router, Route, Link } from 'react-router'
import { Col, Grid, Jumbotron, PageHeader, Row, Tab, Tabs } from 'react-bootstrap'

// Components
const Error = require('./components/404.js');
const Assets = require('./components/Assets.js');
const AcctInfo = require('./components/AcctInfo.js');
const Header = require('./components/Header.js');
const GrowthChart = require('./components/GrowthChart.js');
// const AssetProfile = require('./components/AssetProfile.js');

const baseURL = "https://api.hedgeable.com";

// Root Component
const App = React.createClass({
  getInitialState() {
    return {
      token: "",
      usertoken: "",
      clientID: 0,
      currentAcctID: 1,        
      currentSecurityID: 0,
      firstDate: "",       
      portfolio: {},
      loading: true
    }
  },

  // data passed to child components
  childContextTypes: {
    token: React.PropTypes.string,
    usertoken: React.PropTypes.string,
    clientID: React.PropTypes.number,
    currentAcctID: React.PropTypes.number,
    setCurrentAcctID: React.PropTypes.func,
    currentSecurityID: React.PropTypes.number,
    setCurrentSecurityID: React.PropTypes.func,
    firstDate: React.PropTypes.string,
    setFirstDate: React.PropTypes.func    
  },

  getChildContext() {
    return {
      token: this.state.token,
      usertoken: this.state.usertoken,
      clientID: this.state.clientID,
      currentAcctID: this.state.currentAcctID,
      setCurrentAcctID: this.setCurrentAcctID,
      currentSecurityID: this.state.currentSecurityID,
      setCurrentSecurityID: this.setCurrentSecurityID,
      firstDate: this.state.firstDate,
      setFirstDate: this.setFirstDate
    }
  },

  setCurrentAcctID(id) { 
   this.setState({ currentAcctID: id })
  },

  setCurrentSecurityID(id) { 
   this.setState({ currentSecurityID: id })
  },

  setFirstDate(str) { 
   this.setState({ firstDate: str })
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

        // gets ALL client portfolio & account info & investments
        $.ajax({
          url: `${baseURL}/client/${this.state.clientID}/getallinformation?token=${this.state.token}&usertoken=${this.state.usertoken}`,
          type: 'GET',
          dataType: 'json'
        }).done((data) => {
          // console.log('Entire client portfolio: ', data.response)
          this.setState({ 
            portfolio: data.response,       // entire portfolio + accounts
            firstDate: data.response.balances.stats.firstDate // firstDate of portfolio
          });
          console.log('this.state: ', this.state)
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

  // updates currentAcctID when user navigates btw account tabs
  handleSelect(key) {
    this.setState({ currentAcctID: key });
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
          
          <Tabs activeKey={this.state.currentAcctID} animation={false} onSelect={this.handleSelect} id="account-tabs">
            <Tab eventKey={1} title="My Portfolio">
              <PageHeader> Account Portfolio<br/>
                <small style={{fontSize:'20px'}}>Current balance: ${this.state.portfolio.latestBalance.toLocaleString()}</small><br/>
                <small style={{fontSize:'20px'}}>Hedged percentage: {this.state.portfolio.hedgedPercentage.toFixed(3)}%</small>
              </PageHeader>
              <AcctInfo details={this.state.portfolio.balances} records={null} />       
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
    }   // end of if/else statement
  }
});


render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/assets" component={Assets}/>
      <Route path="/acctInfo" component={AcctInfo}/>
      <Route path="/header" component={Header}/>
      <Route path="/growthChart" component={GrowthChart}/>
    </Route>
    <Route path="*" component={Error}/>
  </Router>
), document.getElementById('container'));
