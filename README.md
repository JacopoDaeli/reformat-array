Reformat objects in an array.


## Requirements

This module is written using ECMAScript 6. It uses `classes`. Be sure you use the latest version of `iojs`.
If you cannot run the latest version of `iojs`, use `reformat-array@0.0.5`.


## Install

### Node
`npm install --save reformat-array`

## Usage
```
var ReformatArray = require('reformat-array');
var reformattedArray = ReformatArray(array, key, target)
```

The following code takes an array of objects and creates a new array containing the newly reformatted objects.
```
var ReformatArray = require('format-array');

var countries = [{code: 'UK', nEntries: 10}, {code: 'FR', nEntries: 15}, {code: 'ESP', nEntries: 4}];

var reformattedArray = ReformatArray.mapToArray(countries, 'code', 'nEntries');

// reformattedArray is now [{UK: 10}, {FR: 15}, {ESP: 30}],
// countries is still [{code: 'UK', nEntries: 10}, {code: 'FR', nEntries: 15}, {code: 'ESP', nEntries: 4}]
```

The following code takes an array of objects and creates one hash table containing the newly reformatted objects.
```
var ReformatArray = require('format-array');

var countries = [{code: 'UK', nEntries: 10}, {code: 'FR', nEntries: 15}, {code: 'ESP', nEntries: 4}];

var dictionary = ReformatArray.mapToDictionary(countries, 'code', 'nEntries');

// dictionary is now { UK: 10, FR: 15, ESP: 30 }
// countries is still [{code: 'UK', nEntries: 10}, {code: 'FR', nEntries: 15}, {code: 'ESP', nEntries: 4}]
```
