/*
 * Copyright 2019 Imaginary Sense <support@imaginary.tech>
 * Copyright 2019 Kevin J. Ponce García <kevin@imaginary.tech>
 * Copyright 2019 Javier O. Cordero Pérez <javier@imaginary.tech>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License
 */

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
