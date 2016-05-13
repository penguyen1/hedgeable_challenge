// 'use strict'
import React from 'react'
import { render, ReactDOM } from 'react-dom'
import { browserHistory, Router, Route, Link, IndexRoute } from 'react-router'
// import auth from './auth'

// const Signup = require('./components/signup.js');
// const Login = require('./components/login.js');
// const Logout = require('./components/logout.js');
// const Homepage = require('./components/homepage.js');
// const Nav = require('./components/nav.js');
// const Createhunt = require('./components/createhunt.js').Createhunt;
// const Gameview = require('./components/gameview.js');



const ApiDocumentation = require('api-documentation');
var api = new ApiDocumentation.AccountTypesApi();
console.log("hedgeable api: ", api);
var token = "token_example"; // API partner authorization token

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
      user: {}
    }
  },

  childContextTypes: {
    currentHuntId: React.PropTypes.number,
    setCurrentHuntId: React.PropTypes.func,
    user: React.PropTypes.object,
    setUser: React.PropTypes.func
  },

  getChildContext: function(){
   return {
     setUser: this.setUser
   }
 },

  setUser: function(user){
   this.setState({user: user});
  },

  componentWillMount(){
    // verifies & retrieves API Partner authorization {token}
    $.ajax({
      url: 'https://api.hedgeable.com/authenticate?username=hedgeable-demo&key=abdluih2908uhb23ovboy39841hbf',
      type: 'POST',
      dataType: 'json'
    }).done((data) => {
      // console.log('getting API Partner token: ', data)
      token = data.response     // verified API Partner authorization token
      
      // retrieves all account types
      $.ajax({
        url: `https://api.hedgeable.com/accounttypes?token=${token}`,
        type: 'GET',
        dataType: 'json'
      }).done((data) => {
        // console.log('getting all account types: ', data)

        // authenticates client & gets client {usertoken}
        $.ajax({
          url: `https://api.hedgeable.com/client/login?token=${token}&email=apidemo@hedgeable.com&password=gethedged`,
          type: 'POST',
          dataType: 'json'
        }).done((data) => {
          console.log('{usertoken} is: ', data.response)
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

function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}



// 404 Error Page
const Error = React.createClass({
  render(){
    return(<h1>404 Error - Oops! Something went wrong here..</h1>)
  }
});

// Access Denied without user token
const DenyAccess = React.createClass({
  render(){
    return(<h3>Access Denied - You must log in first if you want a peek!</h3>)
  }
});

// Welcome Page
const Welcome = React.createClass({
  render(){
    return(<h2>Welcome Peter!</h2>)
  }
});

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/welcome" component={Welcome} />
      <Route path="/deny" component={DenyAccess} />
    </Route>
    <Route path="*" component={Error} />
  </Router>
), document.getElementById('container'));
