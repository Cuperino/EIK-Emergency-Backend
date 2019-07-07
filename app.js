var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser');
var logger = require('morgan');

var initCouch = require('./setup/init_couch');
var locationsRouter = require('./routes/locations');
var categoriesRouter = require('./routes/categories');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

initCouch(function(err) {
  if (err) {
    throw err
  }
  else {
    console.log('CouchDB initialized');
  }
});

// MAIN ROUTE DEFINITIONS
app.use('/locations', locationsRouter);
app.use('/categories', categoriesRouter);


module.exports = app;
