'use strict'
import React from 'react'
import { Col, Collapse, Grid, Jumbotron, Panel, Row, Well } from 'react-bootstrap'         // any other modules???
import rd3 from 'rd3';
const LineChart = rd3.LineChart;
const baseURL = "https://api.hedgeable.com";    // base Hedgeable API URL

// template for benchmark data comparisons
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

// converts int/float into USD currency 
var toUSDCurrency = function(num){
  return num.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
}

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
      benchData: [],
      loading: true
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
      var marketValue = (this.state.assetInfo.amount/this.state.assetInfo.shares).toFixed(2)
      return (
        <Grid>
          <Row className="show-grid">
            <Jumbotron style={{height:'205px'}}>
              <h1 style={{marginTop:'-10px', color:'#254871'}}>{this.state.assetInfo.security.name} ({this.state.assetInfo.security.ticker})</h1><br/>
              <h4><strong>Asset Class:</strong>  {this.state.assetInfo.security.assetClass}</h4>
              <h4><strong>Quantity:</strong>  {this.state.assetInfo.shares.toFixed(2)}</h4>
              <h4><strong>Initial Purchase Price:</strong>  ${this.state.securityPrices[0].value.toFixed(2)}</h4>
              <h4><strong>Market Value Price:</strong>  ${marketValue}</h4>
              <h4><strong>Percentage of Account:</strong>  {(this.state.assetInfo.weight*100).toFixed(2)}%</h4>
              <h4><strong>Total Net Balance:</strong>  ${toUSDCurrency(this.state.assetInfo.amount)}</h4>
            </Jumbotron>
          </Row>
          <Row className="show-grid">
            <Col xs={18} md={12}>
              <Graph data={this.state.benchData} />
            </Col>
          </Row>     
        </Grid>
      )
    }
  }
});


var Graph = React.createClass({
  render() {
    var arrayOfObjs = []

    this.props.data.forEach(bm => {
      console.log('b4 bm: ', bm)
      var revised = {}

      revised['name'] = bm.name
      revised['values'] = bm.values.map(el => {
        var info = {}
        info['x'] = Date.parse(el.date)
        info['y'] = el.value
        return info
      })

      console.log('revised: ', revised)
      arrayOfObjs.push(revised)
    });

    console.log('what it look like: ', arrayOfObjs)


    // var chartData = []
    // var data = {}
    // data.name = this.state.name
    // data.values = arrayOfObjs
    // chartData.push(data)
    // console.log('chartData: ', chartData[0])

    // need to display years on x-axis!
    return (
      <LineChart
        data={lineData}
        width="100%"
        height={400}
        viewBoxObject={{
          x: 0,
          y: 0,
          height: 400,
          width: 700
        }}
        title="Wuhhhhhhhhht"
        xAxisTickInterval={{unit: 'year', interval: 2}}
        xAxisLabel="Time Interval (years)"
        yAxisLabel="The mulah"
        xAccessor={ (d) => d.x }
        yAccessor={ (d) => d.y } 
        gridHorizontal={true} />
    )
  }
});

var lineData = [
  { name: 'series1',
    values: [ { x: 0, y: 20 }, { x: 1, y: 30 }, { x: 2, y: 10 }, { x: 3, y: 5 }, { x: 4, y: 8 }, { x: 5, y: 15 }, { x: 6, y: 10 } ],
    strokeWidth: 3,
    strokeDashArray: "5,5"
  },
  { name: 'series2',
    values : [ { x: 0, y: 8 }, { x: 1, y: 5 }, { x: 2, y: 20 }, { x: 3, y: 12 }, { x: 4, y: 4 }, { x: 5, y: 6 }, { x: 6, y: 2 } ]
  },
  { name: 'series3',
    values: [ { x: 0, y: 0 }, { x: 1, y: 5 }, { x: 2, y: 8 }, { x: 3, y: 2 }, { x: 4, y: 6 }, { x: 5, y: 4 }, { x: 6, y: 2 } ]
  }];

module.exports = AssetProfile;