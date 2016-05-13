require('dotenv').config();
'use strict'
const express     = require('express');
const logger      = require('morgan');      
const path        = require('path');
const bodyParser  = require('body-parser');
const app         = express();

// const secret = process.env.SECRET;
// const expressJWT = require('express-jwt');
// const jwt = require('jsonwebtoken');

// const userRoutes = require( path.join(__dirname, '/routes/users'));
// const huntRoutes = require( path.join(__dirname, '/routes/hunts'));

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use('/api/v1/users', userRoutes);
// app.use('/api/v1/hunts', huntRoutes);

// HOMEPAGE
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
});



var port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Hellooo Handsome!! ', port);
});
