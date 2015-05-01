'use strict';

let reformatArray = require('./index');

let countries = [{code: 'UK', nEntries: 10}, {code: 'FR', nEntries: 15}, {code: 'ESP', nEntries: 4}];

let reformattedArray = reformatArray.mapToArray(countries, 'code', 'nEntries');

console.log(reformattedArray);

let hashtable = reformatArray.mapToHashtable(countries, 'code', 'nEntries');

console.log(hashtable);
