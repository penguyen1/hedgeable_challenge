'use strict'
import React from 'react'
import { Col, Row, Tab, Tabs } from 'react-bootstrap'         // any other modules???

// Components
const Assets = require('./Assets.js');              // account holdings table of stocks|cash
const GrowthChart = require('./GrowthChart.js');    // growth chart of balances|returns|*transactions*

// Displays Portfolio|Account Assets(table) & Investment Growth(line graph) 
const AcctInfo = React.createClass({
  renderTransactions(transactions) {
    // console.log('rendering transactions: ', transactions)        // works? -->Yes

    if(transactions.length){
      // renders list of collapsible transactions
      // accountID = this.props.id
      return (
        <Tab eventKey={3} title="Transactions"> 
          Date Picker module + collapsible list of panels for account transactions 
        </Tab>
      )
    } else {
      // no available transactions to render
      return <Tab eventKey={3} title="Transactions" disabled>No transactions</Tab>
    }
  },

  render() {
    return (
      <Row className="show-grid">
        <Col xs={9} md={6}>
          <Assets id={this.props.id} details={this.props.details.holdings} date={this.props.details.stats.firstDate} />
        </Col>
        <Col xs={9} md={6}>
          <Tabs defaultActiveKey={1} animation={false} id="growthChart-tabs">
            <Tab eventKey={1} title="Returns"> 
              <GrowthChart details={this.props.details.returns} title="Investment Returns" yAxis="(+/-) Returns" />
            </Tab>
            <Tab eventKey={2} title="Balances"> 
              <GrowthChart details={this.props.details.balances} title="Account Net Balance" yAxis="Total Value (USD)" />
            </Tab>
            {this.renderTransactions(this.props.records)}
          </Tabs>
        </Col>
      </Row>        
    )
  }
});

module.exports = AcctInfo;




// // Array of account investment transactions (Dividend, Buy, Sell, Initial)
// const Transactions = React.createClass({
//   // contextTypes: {
//   //   router: React.PropTypes.object.isRequired,
//   //   setCurrentSecurityID: React.PropTypes.func,
//   //   setStartDate: React.PropTypes.func,
//   //   setAcctID: React.PropTypes.func
//   // },

//   getInitialState() {
//     return {
//       open: false    // for collapsible Transactions
//     }
//   },

// //   handleClick(event) {
// //     event.preventDefault();
// //     console.log("asset security id clicked: ", this.props.details.security.id)
// //     // this.context.setCurrentSecurityID(this.props.details.security.id);
// //     // this.context.router.replace('/assetProfile');
// // 
// //     this.setState({ open: !this.state.open });
// //   },

//   handleClick(event) {
//     event.preventDefault();
//     // toggles collapsible panel for Transactions data
//     this.setState({ open: !this.state.open });      
//   },

//   render() {
//     return (
//       <tr key={this.props.details.security.id} onClick={this.handleClick}>
//         <td colSpan="5">
//           <Collapse in={this.state.open}>
//             <div>
//               <Well>
//                 Hello!
//               </Well>
//             </div>
//           </Collapse>
//         </td>
//       </tr>
//     )
//   }
// });




