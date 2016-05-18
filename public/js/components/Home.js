'use strict'
import React from 'react'
import { Grid, Jumbotron, PageHeader, Tab, Tabs } from 'react-bootstrap'

// Components
const AcctInfo = require('./AcctInfo.js');
const Header = require('./Header.js');
const baseURL = "https://api.hedgeable.com";    // base Hedgeable API URL

// converts int/float into USD currency 
var toUSDCurrency = function(num){
  return num.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
}

// Home component
const Home = React.createClass({
  contextTypes: {
    token: React.PropTypes.string,
    usertoken: React.PropTypes.string,
    clientID: React.PropTypes.number
  },

  getInitialState() {
    return {
      portfolio: {},
      name: "",
      loading: true
    }
  },

  componentWillMount() {
    // console.log('token: ', this.context.token)
    // console.log('usertoken: ', this.context.usertoken)
    // console.log('clientID: ', this.context.clientID)

    // gets ALL client portfolio & account info & investments
    $.ajax({
      url: `${baseURL}/client/${this.context.clientID}/getallinformation?token=${this.context.token}&usertoken=${this.context.usertoken}`,
      type: 'GET',
      dataType: 'json'
    }).done((data) => {
      // console.log('Entire client portfolio: ', data.response)
      this.setState({ portfolio: data.response, name: data.response.client.firstName },
        function(){ console.log('this.state: ', this.state) })
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
          <h1 style={{marginTop:'200px'}}>Hello Handsome!...</h1>
        </div>
      )
    } else {
      return (
        <div>
          <Jumbotron style={{height:'205px'}}>
            <h1 style={{marginTop:'-10px'}}> Hello again, {this.state.name}! </h1>
            <p>For more details, click on the tabs or list of assets below!</p>
          </Jumbotron>
          
          <Tabs defaultActiveKey={1} animation={false} id="account-tabs">
            <Tab eventKey={1} title="My Portfolio">
              <PageHeader> Account Portfolio<br/>
                <small style={{fontSize:'20px'}}>Current balance: ${toUSDCurrency(this.state.portfolio.latestBalance)}</small><br/>
                <small style={{fontSize:'20px'}}>Hedged percentage: {this.state.portfolio.hedgedPercentage.toFixed(3)}%</small>
              </PageHeader>
              <AcctInfo id={1} details={this.state.portfolio.balances} records={[]} />       
            </Tab>

            {this.state.portfolio.accountsInfo.map((el) =>
              <Tab key={el.account.id} eventKey={el.account.id} title={el.account.name.split(' ').slice(1).join(' ')}> 
                <Header details={el} />
                <AcctInfo id={el.account.id} details={el.balances} records={el.transactions} />
              </Tab> 
            )}
          </Tabs>
        </div>
      )
    }
  }
});


module.exports = Home;

