'use strict'
import React from 'react'
import { render, ReactDOM } from 'react-dom'
import { browserHistory, Router, Route, Link } from 'react-router'
import { Col, Grid, Jumbotron, PageHeader, Row, Tab, Tabs, Table } from 'react-bootstrap'

// React D3 modules
// var Chart = require('react-d3-core').Chart;
// var LineChart = require('react-d3-basic').LineChart;
// var d3 = require('d3-shape');
// var rd3 = require('rd3');
// const LineChart = rd3.LineChart;

const Error = require('./components/404.js');
const Assets = require('./components/Assets.js');
const AcctInfo = require('./components/AcctInfo.js');
const Header = require('./components/Header.js');
// const GrowthChart = require('./components/GrowthChart.js');
const ChartTest = require('./components/ChartTest.js');

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};

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

  // data to be passed to child components
  childContextTypes: {
    token: React.PropTypes.string,
    usertoken: React.PropTypes.string,
    currentAssetID: React.PropTypes.number,
    setCurrentAssetID: React.PropTypes.func,
    portfolio: React.PropTypes.object
  },

  getChildContext(){
    return {
      token: this.state.token,
      usertoken: this.state.usertoken,
      currentAssetID: this.state.currentAssetID,
      setCurrentAssetID: this.setCurrentAssetID,
      portfolio: this.state.portfolio
    }
  },

  setCurrentAssetID(id){
   this.setState({ currentAssetID: id });
  },

  componentWillMount(){
    // verifies & retrieves API Partner authorization {token}
    $.ajax({
      url: 'https://api.hedgeable.com/authenticate?username=hedgeable-demo&key=abdluih2908uhb23ovboy39841hbf',
      type: 'POST',
      dataType: 'json'
    }).done((data) => {
      // console.log('getting API Partner token: ', data)
      this.setState({ token: data.response })     // API Partner authorization {token}

      // authenticates client & gets client {usertoken}
      $.ajax({
        url: `https://api.hedgeable.com/client/login?token=${this.state.token}&email=apidemo@hedgeable.com&password=gethedged`,
        type: 'POST',
        dataType: 'json'
      }).done((data) => {
        // console.log('{usertoken} is: ', data.response)   
        this.setState({ 
          usertoken: data.response.token,   // authenticated client {usertoken}
          clientId: data.response.id        // clientId 
        }) 

        // retrieves all client account info
        $.ajax({
          url: `https://api.hedgeable.com/client/${this.state.clientId}/getallinformation?token=${this.state.token}&usertoken=${this.state.usertoken}`,
          type: 'GET',
          dataType: 'json'
        }).done((data) => {
          // console.log('entire client portfolio: ', data.response)
          this.setState({ portfolio: data.response })
          console.log('this.state: ', this.state)
        });
      });
    });
  },

  // delays render method for API call to complete
  componentDidMount(){
    var self = this;
    setTimeout(() => {
      self.setState({ loading: false })       
    }, 1000);
  },

  renderAsset(asset){
    // converts asset Cash security id 0 to 1393 
    asset.security.id < 1 ? asset.security.id = 1393 : asset.security.id;
    // console.log("rendering asset id: ", asset.security.id)
    
    return <Assets key={asset.security.id} details={asset}/>
  },

  render() {
    if(this.state.loading){
      return (
        <div id="container-bg">
          <h3>Loading...</h3>
        </div>
      )
    } else {
      // console.log('Data: ', this.state.portfolio)
      var balancesData = this.state.portfolio.balances.balances;
      var returnsData = this.state.portfolio.balances.returns;
      // balancesData.forEach(el => console.log("balancesData date: ", el.date))
      // console.log('returnsData: ', returnsData)
      // console.log('balancesData: ', balancesData)
      // var line = d3.line()
      //   .x(function(d){ console.log("x-axis: ", d.date})            //{ return x(d.date) })
      //   .y(function(d){ console.log("y-axis: ", d.value})            //return y(d.value) });

      return (
        <Grid>
          <Jumbotron style={{height:'205px'}}>
            <h1 style={{marginTop:'-10px'}}>Hello, {this.state.portfolio.client.firstName}!</h1>
            <p>For more details, click on the tabs or list of assets below!</p>
          </Jumbotron>
          
          <Tabs defaultActiveKey={1} id="account-tabs">
            <Tab eventKey={1} title="My Portfolio">
              <PageHeader> Account Portfolio<br/>
                <small style={{fontSize:'21px'}}>Current balance: ${this.state.portfolio.latestBalance.toLocaleString()}</small><br/>
                <small style={{fontSize:'21px'}}>Hedged percentage: {this.state.portfolio.hedgedPercentage.toFixed(3)}%</small>
              </PageHeader>
            
              <Row className="show-grid">
                <Col xs={10} md={7}>
                  <Assets details={this.state.portfolio.balances.holdings} />
                </Col>
                <Col xs={8} md={5}>
                  <Tabs defaultActiveKey={1} id="growthChart-tabs">
                    <Tab eventKey={1} title="Returns">
                      {/* Growth Line Chart of Portfolio Returns */}
                      <ChartTest details={this.state.portfolio.balances.returns} title="Growth Chart of Returns" yAxis="Value(%)" />
                    </Tab>
                    <Tab eventKey={2} title="Balances"> Growth Line Chart of Portfolio Balances </Tab>
                  </Tabs>
                </Col>
              </Row>              
            </Tab>

            {this.state.portfolio.accountsInfo.map( el =>
              <Tab key={el.account.id} eventKey={el.account.id} title={el.account.name.split(' ').slice(1).join(' ')}> 
                <Header details={el} />
                <AcctInfo details={el.balances} />
              </Tab> 
            )}
          </Tabs>
        </Grid>
      )
    }
  }
});

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/assets" component={Assets} />
      <Route path="/acctInfo" component={AcctInfo} />
      <Route path="/header" component={Header} />
      <Route path="/chartTest" component={ChartTest} />
    </Route>
    <Route path="*" component={Error} />
  </Router>
), document.getElementById('container'));
