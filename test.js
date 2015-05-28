'use strict';

const ReformatArray = require('./index')

const countries = [{code: 'UK', nEntries: 10}, {code: 'FR', nEntries: 15}, {code: 'ESP', nEntries: 4}]

let reformattedArray = ReformatArray.mapToArray(countries, 'code', 'nEntries');

console.log(reformattedArray)

let dictionary = ReformatArray.mapToDictionary(countries, 'code', 'nEntries')

console.log(dictionary)
