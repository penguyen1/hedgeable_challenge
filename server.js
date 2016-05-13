require('dotenv').config();
'use strict'
const express     = require('express');
const logger      = require('morgan');        // logs request details
const path        = require('path');          // defines API route paths
const bodyParser  = require('body-parser');   // parses user input into JSON
const app         = express();

// const secret = process.env.SECRET;
// const expressJWT = require('express-jwt');     // user auth - necessary?
// const jwt = require('jsonwebtoken');

const userRoutes = require( path.join(__dirname, '/routes/users'));

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));    // index.html
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/users', userRoutes);

// HOMEPAGE
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
});


var port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Hellooo Handsome!! ', port);
});
