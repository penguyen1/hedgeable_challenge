'use strict'
import React from 'react'
import { Accordion, Col, Collapse, Grid, Jumbotron, Panel, Row, Tab, Tabs, Well } from 'react-bootstrap'
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
          <h1 style={{marginTop:'200px'}}>Wait for it...</h1>
        </div>
      )
    } else {
      var marketValue = (this.state.assetInfo.amount/this.state.assetInfo.shares).toFixed(2)
      return (
        <Grid>
          <Jumbotron style={{height:'205px'}}>
            <h1 style={{marginTop:'-10px', color:'#254871'}}>{this.state.assetInfo.security.name} ({this.state.assetInfo.security.ticker})</h1><br/>
          </Jumbotron>

          <Row className="show-grid">
            <Col xs={18} md={12}>
              <Tabs defaultActiveKey={1} id="assetProfile-tabs">
                <Tab eventKey={1} title="Info"> 
                  <Accordion>
                    <Panel header="Asset Purchase Price" eventKey="1">
                      <Well style={{fontSize:'30px', color:'#ab5462'}}>
                        Initial Purchase Price: <strong>${this.state.securityPrices[0].value.toFixed(2)}</strong><br/>
                        Market Value Price: <strong>${marketValue}</strong><br/>
                      </Well>
                    </Panel>
                    <Panel header="Total.." eventKey="2">
                      <Well  style={{fontSize:'30px', color:'#853334'}}>
                        Quantity: <strong>{this.state.assetInfo.shares.toFixed(2)} shares</strong><br/>
                        Balance: <strong>${toUSDCurrency(this.state.assetInfo.amount)}</strong><br/>
                      </Well>
                    </Panel>
                    <Panel header="More Info" eventKey="3">
                      <Well  style={{fontSize:'30px', color:'#6491a6'}}> 
                        Asset Class Category: <strong>{this.state.assetInfo.security.assetClass}</strong><br/>
                        Percentage of Account: <strong>{(this.state.assetInfo.weight*100).toFixed(2)}%</strong><br/>
                      </Well>
                    </Panel>
                  </Accordion>
                </Tab>
                <Tab eventKey={2} title="Asset vs Benchmarks"> 
                  <Graph data={this.state.benchData} />
                </Tab>
                <Tab eventKey={3} title="Transactions Database" disabled> 
                  Render filtered transactions here
                </Tab>
              </Tabs>
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
      var revised = {}
      revised['name'] = bm.name

      revised['values'] = bm.values.map(el => {
        var info = {}
        info['x'] = Date.parse(el.date)
        info['y'] = el.value
        return info
      })
      arrayOfObjs.push(revised)
    });

    // need to display years on x-axis!
    return (
      <LineChart
        legend={true}
        legendOffset={300}
        data={arrayOfObjs}
        width={800}
        height={600}
        viewBoxObject={{
          x: 0,
          y: 0,
          height: 400,
          width: 600
        }}
        title="Value comparison against S&P 500, Dow Jones & Russell 2000 Benchmarks"
        xAxisTickInterval={{unit: 'year', interval: 2}}
        xAxisLabel="Time Interval"
        yAxisLabel="Index Value"
        xAxisLabelOffset={60}
        yAxisLabelOffset={60}
        xAccessor={ (d) => d.x }
        yAccessor={ (d) => d.y } 
        gridHorizontal={true} />
    )
  }
});

module.exports = AssetProfile;