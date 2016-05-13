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



var ApiDocumentation = require('api-documentation');
var api = new ApiDocumentation.AccountTypesApi();
console.log("hedgeable api: ", api);
var token = "token_example"; // {String} The API partner's authorization token

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
// api.searchUsingGET1(token, callback);



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
    console.log('componentWillMount')
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
