// 'use strict'
import React from 'react'
import { render, ReactDOM } from 'react-dom'
import { browserHistory, Router, Route, Link, IndexRoute } from 'react-router'
const ApiDocumentation = require('api-documentation');
var api = new ApiDocumentation.AccountTypesApi();
var token = "token_example"; // API partner authorization token

// const profileInfo = require('./components/profileInfo.js');
// const holdingsTable = require('./components/holdingsTable.js');
// const growthChart = require('./components/growthChart.js');
// const errorPage = require('./components/404.js');

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
      client: {},
      token: "",
      portfolio: {}
    }
  },

  // data to be passed to child components
  childContextTypes: {
    client: React.PropTypes.object,
    token: React.PropTypes.string
  },

  componentWillMount(){
    // verifies & retrieves API Partner authorization {token}
    $.ajax({
      url: 'https://api.hedgeable.com/authenticate?username=hedgeable-demo&key=abdluih2908uhb23ovboy39841hbf',
      type: 'POST',
      dataType: 'json'
    }).done((data) => {
      // console.log('getting API Partner token: ', data)
      this.setState({ token: data.response })     // API Partner authorization token

      // retrieves all account types
      $.ajax({
        url: `https://api.hedgeable.com/accounttypes?token=${token}`,
        type: 'GET',
        dataType: 'json'
      }).done((data) => {
        console.log('getting all account types??: ', data)

        // authenticates client & gets client {usertoken}
        $.ajax({
          url: `https://api.hedgeable.com/client/login?token=${this.state.token}&email=apidemo@hedgeable.com&password=gethedged`,
          type: 'POST',
          dataType: 'json'
        }).done((data) => {
          // console.log('{usertoken} is: ', data.response)   
          this.setState({ client: data.response }) 
          // {usertoken}: data.response.token
          // clientid: data.response.id

            // retrieves all client account info        17379 - 17978
            $.ajax({
              url: `https://api.hedgeable.com/client/${this.state.client.id}/getallinformation?token=${this.state.token}&usertoken=${this.state.client.token}`,
              type: 'GET',
              dataType: 'json'
            }).done((data) => {
              // console.log('entire client portfolio: ', data.response)
              this.setState({ portfolio: data.response })
              console.log('entire client portfolio: ', this.state)
            });

        })

      })

    });
  },

  render() {
    return (
      <div id="page_bg">
        React works!
      </div>
    )
  }
});



// 404 Error Page
const Error = React.createClass({
  render(){
    return(<h1>404 Error! Something went wrong here..</h1>)
  }
});


render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/" component={} />
      <Route path="/" component={} />
    </Route>
    <Route path="*" component={Error} />
  </Router>
), document.getElementById('container'));
