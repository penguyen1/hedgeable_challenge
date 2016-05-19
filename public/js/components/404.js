'use strict'
import React from 'react'
import { Jumbotron } from 'react-bootstrap'

// 404 Error Page - prompts user of invalid inputs/render errors
const Error = React.createClass({
  render() {
    return (
      <Jumbotron>
        <h1>404 Error!</h1>
        <p>Something went wrong here..</p>
      </Jumbotron>
    )
  }
});

module.exports = Error;