'use strict';

let formatArray = require('./index');

let countries = [{code: 'UK', nEntries: 10}, {code: 'FR', nEntries: 15}, {code: 'ESP', nEntries: 4}];

let hashtable = formatArray(countries, 'code', 'nEntries');

console.log(hashtable);
console.log(countries);
