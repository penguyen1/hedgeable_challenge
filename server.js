require('dotenv').config();
'use strict'
const express     = require('express');
const logger      = require('morgan');        // logs request details
const path        = require('path');          // defines API route paths
const bodyParser  = require('body-parser');   // parses user input into JSON
const app         = express();
var ApiDocumentation = require('api-documentation');
var api = new ApiDocumentation.AccountTypesApi();
var token = "token_example"; // {String} The API partner's authorization token

// const secret = process.env.SECRET;
// const expressJWT = require('express-jwt');     // user auth - necessary?
// const jwt = require('jsonwebtoken');

// const userRoutes = require( path.join(__dirname, '/routes/users'));

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));    // index.html
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use('/users', userRoutes);

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.searchUsingGET1(token, callback);

// HOMEPAGE
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
});


var port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Hellooo Handsome!! ', port);
});


// var ApiDocumentation = require('api-documentation');
// var api = new ApiDocumentation.AccountTypesApi();
// var token = "token_example"; // {String} The API partner's authorization token

// var callback = function(error, data, response) {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log('API called successfully. Returned data: ' + data);
//   }
// };
// api.searchUsingGET1(token, callback);