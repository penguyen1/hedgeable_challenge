'use strict'
import React from 'react'
import { Col, Collapse, Grid, Jumbotron, Panel, Row, Well } from 'react-bootstrap'         // any other modules???
import rd3 from 'rd3';
const LineChart = rd3.LineChart;

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
    return{
      assetInfo: {},
      assetTransactions: {},
      chartData: ['S&P 500 Index', 'Dow Jones Industrial Average', 'Russell 2000 Index', '(insert Asset Name here)']
    }
  },

  componentWillMount() {
    console.log('AP -- token: ', this.context.token)
    console.log('AP -- usertoken: ', this.context.usertoken)
    console.log('AP -- clientID: ', this.context.clientID)
    console.log('AP -- accountID: ', this.context.accountID)
    console.log('AP -- currentSecurityID: ', this.context.currentSecurityID)
    console.log('AP -- startDate: ', this.context.startDate)
    console.log("AP - checking props: ", this.props)

    // ajax call to get holding info
    // ajax call to get benchmark arrays (start-now)
    // ajax call to get security price array (start-now)
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


