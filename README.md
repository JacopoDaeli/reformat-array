Reformat objects in an array.

## Install

### Node
`npm install --save reformat-array`

## Usage

```
var reformatArray = require('reformat-array');
var reformattedArray = reformatArray(array, key, target)
```

The following code takes an array of objects and creates a new array containing the newly reformatted objects.
```
var reformatArray = require('format-array');

var countries = [{code: 'UK', nEntries: 10}, {code: 'FR', nEntries: 15}, {code: 'ESP', nEntries: 4}];

var reformattedArray = reformatArray.mapToArray(countries, 'code', 'nEntries');

// reformattedArray is now [{UK: 10}, {FR: 15}, {ESP: 30}],
// countries is still [{code: 'UK', nEntries: 10}, {code: 'FR', nEntries: 15}, {code: 'ESP', nEntries: 4}]
```

The following code takes an array of objects and creates one hash table containing the newly reformatted objects.
```
var reformatArray = require('format-array');

var countries = [{code: 'UK', nEntries: 10}, {code: 'FR', nEntries: 15}, {code: 'ESP', nEntries: 4}];

var hashtable = reformatArray.mapToHashtable(countries, 'code', 'nEntries');

// hashtable is now { UK: 10, FR: 15, ESP: 30 }
// countries is still [{code: 'UK', nEntries: 10}, {code: 'FR', nEntries: 15}, {code: 'ESP', nEntries: 4}]
```
