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
      clientId: "",
      currentAssetID: 0,
      portfolio: {},
      loading: true
    }
  },

  // data passed to child components
  childContextTypes: {
    token: React.PropTypes.string,
    usertoken: React.PropTypes.string,
    currentAssetID: React.PropTypes.number,
    setCurrentAssetID: React.PropTypes.func,
    portfolio: React.PropTypes.object
  },

  getChildContext() {
    return {
      token: this.state.token,
      usertoken: this.state.usertoken,
      currentAssetID: this.state.currentAssetID,
      setCurrentAssetID: this.setCurrentAssetID,
      portfolio: this.state.portfolio
    }
  },

  setCurrentAssetID(id) { 
   this.setState({ currentAssetID: id })
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
          clientId: data.response.id        // clientId 
        }); 

        // gets ALL client portfolio & account info & investments
        $.ajax({
          url: `${baseURL}/client/${this.state.clientId}/getallinformation?token=${this.state.token}&usertoken=${this.state.usertoken}`,
          type: 'GET',
          dataType: 'json'
        }).done((data) => {
          // console.log('Entire client portfolio: ', data.response)
          this.setState({ portfolio: data.response })
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
              <AcctInfo details={this.state.portfolio.balances} records={} />       
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
