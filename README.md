Reformat objects in an array.


## Requirements

This module is written using ES6. It uses `classes`. Be sure you use the latest version of `iojs`.
If you don't, use should `reformat-array@0.0.5`.


## Install

### Node
`npm install --save reformat-array`

## Usage
```
const ReformatArray = require('reformat-array')
const reformattedArray = ReformatArray.mapToArray(array, key, target)
```

The following code takes an array of objects and creates a new array containing the newly reformatted objects.
```
const ReformatArray = require('format-array')

const countries = [{code: 'UK', nEntries: 10}, {code: 'FR', nEntries: 15}, {code: 'ESP', nEntries: 4}]

const reformattedArray = ReformatArray.mapToArray(countries, 'code', 'nEntries')

// reformattedArray is now [{UK: 10}, {FR: 15}, {ESP: 30}]
// countries is still [{code: 'UK', nEntries: 10}, {code: 'FR', nEntries: 15}, {code: 'ESP', nEntries: 4}]
```

The following code takes an array of objects and creates one hash table containing the newly reformatted objects.
```
const ReformatArray = require('format-array')

const countries = [{code: 'UK', nEntries: 10}, {code: 'FR', nEntries: 15}, {code: 'ESP', nEntries: 4}]

const dictionary = ReformatArray.mapToDictionary(countries, 'code', 'nEntries')

// dictionary is now { UK: 10, FR: 15, ESP: 30 }
// countries is still [{code: 'UK', nEntries: 10}, {code: 'FR', nEntries: 15}, {code: 'ESP', nEntries: 4}]
```
