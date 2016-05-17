// 'use strict'
import React from 'react'
import { render, ReactDOM } from 'react-dom'
import { browserHistory, Router, Route, Link } from 'react-router'
import { Col, Grid, PageHeader, Row, Table } from 'react-bootstrap'
const ApiDocumentation = require('api-documentation');                        // delete?
var api = new ApiDocumentation.AccountTypesApi();                             // delete?
var token = "token_example"; // API partner authorization token               // delete?

const Error = require('./components/404.js');
const Assets = require('./components/Assets.js');
// const ProfileInfo = require('./components/ProfileInfo.js');
// const GrowthChart = require('./components/GrowthChart.js');

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
      portfolio: {},
      loading: true
    }
  },

  // data to be passed to child components
  childContextTypes: {
    token: React.PropTypes.string,
    usertoken: React.PropTypes.string,
    portfolio: React.PropTypes.object
  },

  getChildContext: function(){
   return {
    token: this.state.token,
    usertoken: this.state.usertoken,
    portfolio: this.state.portfolio
   }
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

      // // retrieves all account types
      // $.ajax({
      //   url: `https://api.hedgeable.com/accounttypes?token=${this.state.token}`,
      //   type: 'GET',
      //   dataType: 'json'
      // }).done((data) => {
      //   console.log('getting all account types??: ', data)
      // })

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
    }, 600);
  },

  renderAsset(asset){
    // Cash Asset security id: 0
    // if(asset.security.id < 1){
    //   asset.security.id = 1393
    // }
    console.log("rendering asset id: ", asset.security.id)
    // console.log("rendering asset info: ", asset)
    return(
      <Assets key={asset.security.id} details={asset}/>
    )
  },

  render() {
    var holdings = [];
    // console.log('this.state: ', this.state)
    if(this.state.loading){
      return (
        <div id="container-bg">
          <h3>Loading...</h3>
        </div>
      )
    } else {
      return (
        <Grid>
          <PageHeader> Hello, {this.state.portfolio.client.firstName}!<br/>
            <h4>Current balance: ${this.state.portfolio.latestBalance.toLocaleString()}</h4>
            <h4>Hedged percentage: {this.state.portfolio.hedgedPercentage.toFixed(3)}%</h4>
          </PageHeader>
          <Row className="show-grid">

            <Col xs={9} md={6}>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Ticker</th>
                    <th>Shares</th>
                    <th>Total Balance</th>
                    <th>Portfolio percentage</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.portfolio.balances.holdings.forEach( el => holdings.push(this.renderAsset(el)) )}
                  {holdings}
                </tbody>
              </Table>
            </Col>

            <Col xs={9} md={6}>accountGrowthChart here</Col>

          </Row>
        </Grid>
      )
    }
  }
});


render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/assets" component={Assets} />
    </Route>
    <Route path="*" component={Error} />
  </Router>
), document.getElementById('container'));
