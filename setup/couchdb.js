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

var nano = require('nano');
//construct a database wrapper that points to the CouchDB server specified by the URL
module.exports = nano(process.env.COUCHDB_URL ||'http://admin:3*tg1Q!v,>i8|t~5@localhost:5984/');
console.log(module.exports);
