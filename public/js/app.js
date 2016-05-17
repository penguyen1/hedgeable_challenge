'use strict'
import React from 'react'
import { render, ReactDOM } from 'react-dom'
import { browserHistory, Router, Route, Link } from 'react-router'
import { Col, Grid, PageHeader, Row, Tab, Tabs, Table } from 'react-bootstrap'

const Error = require('./components/404.js');
const Assets = require('./components/Assets.js');
// const Profile = require('./components/Profile.js');
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
      currentAssetID: 0,
      portfolio: {},
      key: 1,
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

  handleSelect(key){
    // console.log("Viewing Account: ", key)
    this.setState({ key: key });
    // this.router.replace('/profile');
    console.log('App component router: ', this.router)
  },

  renderAsset(asset){
    // converts asset Cash security id 0 to 1393 
    asset.security.id < 1 ? asset.security.id = 1393 : asset.security.id;
    // console.log("rendering asset id: ", asset.security.id)
    
    return(
      <Assets key={asset.security.id} details={asset}/>
    )
  },

  render() {
    // list of account holdings
    var holdings = [];    
    var accounts = [];

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
            <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab">
              <Tab eventKey={1} title="Portfolio">
                <Col xs={10} md={7}>
                  <Assets details={this.state.portfolio.balances.holdings} />
                </Col>

                <Col xs={8} md={5}>accountGrowthChart here</Col>
              </Tab>
              {this.state.portfolio.accountsInfo.map( el =>
                <Tab eventKey={el.account.id} title={el.account.name.split(' ').slice(1).join(' ')}> 
                  {el.account.name}
                </Tab> 
              )}
              
            </Tabs>
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
