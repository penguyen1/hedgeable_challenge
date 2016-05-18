'use strict'
import React from 'react'
import { Col, Collapse, Grid, Jumbotron, Panel, Row, Well } from 'react-bootstrap'         // any other modules???
import rd3 from 'rd3';
const LineChart = rd3.LineChart;
const baseURL = "https://api.hedgeable.com";    // base Hedgeable API URL

var benchmarkData = [
  { id: 3,
    name: 'S&P 500 Index',
    values: [] },
  { id: 5,
    name: 'Dow Jones Industrial Average',
    values: [] },
  { id: 6,
    name: 'Russell 2000 Index',
    values: [] } 
];

// Displays current Asset information
const AssetProfile = React.createClass({
  contextTypes: {
    token: React.PropTypes.string,
    usertoken: React.PropTypes.string,
    clientID: React.PropTypes.number,
    accountID: React.PropTypes.number,
    currentSecurityID: React.PropTypes.number,
    startDate: React.PropTypes.string
  },

  getInitialState() {
    return {
      assetInfo: {},
      transactions: [],
      securityPrices: [],
      benchData: []
    }
  },

  componentWillMount() {
    console.log('AP -- token: ', this.context.token)
    console.log('AP -- usertoken: ', this.context.usertoken)
    console.log('AP -- clientID: ', this.context.clientID)
    console.log('AP -- accountID: ', this.context.accountID)                    // if 1: Client Holdings; else: Client-Account holdings 
    console.log('AP -- currentSecurityID: ', this.context.currentSecurityID)    // MUST have this info
    console.log('AP -- startDate: ', this.context.startDate)                    // MUST have this info
    
    var asset = {}

    if(this.context.accountID === 1){
      // gets Asset Holding info
      $.ajax({
        url: `${baseURL}/client/${this.context.clientID}/holdings?token=${this.context.token}&usertoken=${this.context.usertoken}`,
        type: 'GET',
        dataType: 'json'
      }).done((data) => {
        // console.log('Asset holdings: ', data.response)
        data.response.forEach((el)=>{
          if(el.security.id === this.context.currentSecurityID){ 
            this.setState({ assetInfo: el })
          }
        });
        console.log('checkpoint 1: ', this.state)
        asset.name = this.state.assetInfo.security.name
      });
    } else {
      // gets Asset (+AccountID) Holding info
      $.ajax({
        url: `${baseURL}/client/${this.context.clientID}/account/${this.context.accountID}/holdings?token=${this.context.token}&usertoken=${this.context.usertoken}`,
        type: 'GET',
        dataType: 'json'
      }).done((data) => {
        // console.log('Asset-Acct holdings: ', data.response)
        data.response.forEach((el)=>{
          if(el.security.id === this.context.currentSecurityID){ 
            this.setState({ assetInfo: el })
          }
        });

        // gets Asset Transactions
        $.ajax({
          url: `${baseURL}/client/${this.context.clientID}/account/${this.context.accountID}/transactions?token=${this.context.token}&usertoken=${this.context.usertoken}`,
          type: 'GET',
          dataType: 'json'
        }).done((data) => { 
          // console.log('AP Client-Account transactions: ', data.response);        // why empty but has array[200+] from acct/getallinformation ??
          this.setState({ transactions: data.response })
          console.log('checkpoint 1: ', this.state)
          asset.name = this.state.assetInfo.security.name
        });       
      });
    }

    // gets securityPrice data from startDate - today
    $.ajax({
      url: `${baseURL}/security/${this.context.currentSecurityID}/prices?token=${this.context.token}&startdate=${this.context.startDate}`,
      type: 'GET',
      dataType: 'json'
    }).done((data) => {
      console.log('securityPrices (startDate-today): ', data.response)
      this.setState({ securityPrices: data.response })
      console.log('checkpoint 2: ', this.state)
      asset.values = data.response
  
      // gets benchmark data
      benchmarkData.map((el)=>this.getBenchmarkData(el))
      benchmarkData.push(asset)
      this.setState({ benchData: benchmarkData });
      console.log('checkpoint 3 - benchmarkData: ', benchmarkData)
    });
  },


  getBenchmarkData(x) {
    // gets Benchmark data (S&P 500, Dow Jones, Russell 2000) from startDate - today
    $.ajax({
      url: `${baseURL}/benchmark/${x.id}/values?token=${this.context.token}&startdate=${this.context.startDate}`,
      type: 'GET',
      dataType: 'json'
    }).done((data) => {
      x.values = data.response 
      return x
    }); 
  },

  render() {
    return (
      <Grid>
        <Jumbotron style={{height:'205px'}}>
          <h1 style={{marginTop:'-10px'}}> Asset Name (Ticker) </h1>
          <p>AssetClass: ....</p>
          <p>Quantity: ....</p>
          <p>Initial Purchase Price($): ....</p>
          <p>Market Value Price($): .... (+/- Gains)</p>
          <p>Percentage of Account(%): ....</p>
          <p>Total Net Balance($): ....</p>
        </Jumbotron>
        
        <Row className="show-grid">
          <Col xs={18} md={12}>
            Line Chart here
            {/* Line Chart here */}
          </Col>
        </Row>     
      </Grid>
    )
  }
});

module.exports = AssetProfile;


// data template
// x: +(date), y: value
var lineData = [
  { 
    name: 'S&P 500 Index',
    values: [ { x: 0, y: 20 }, { x: 1, y: 30 }, { x: 2, y: 10 }, { x: 3, y: 5 }, { x: 4, y: 8 }, { x: 5, y: 15 }, { x: 6, y: 10 } ],
    color: "green"
  },
  {
    name: 'Dow Jones Industrial Average',
    values : [ { x: 0, y: 8 }, { x: 1, y: 5 }, { x: 2, y: 20 }, { x: 3, y: 12 }, { x: 4, y: 4 }, { x: 5, y: 6 }, { x: 6, y: 2 } ],
    color: "yellow"
  },
  {
    name: 'Russell 2000 Index',
    values: [ { x: 0, y: 0 }, { x: 1, y: 5 }, { x: 2, y: 8 }, { x: 3, y: 2 }, { x: 4, y: 6 }, { x: 5, y: 4 }, { x: 6, y: 2 } ],
    color: "light-blue"
  },
  {
    name: '(insert Asset Name here)',
    values: [ "ajax call to", "securityPrice", "from", "startDate", "tonow" ],
    strokeWidth: 3,
    strokeDashArray: "5,5",
    color: "red"
  } 
];


