Reformat objects in an array.

# Install

## Node
`npm install --save reformat-array`

# Usage

```
var formatArray = require('format-array');
var formattedArray = formatArray(array, key, target)
```

The following code takes an array of objects and creates a new array containing the newly reformatted objects.
```
var formatArray = require('format-array');

var countries = [{code: 'UK', nEntries: 10}, {code: 'FR', nEntries: 15}, {code: 'ESP', nEntries: 4}];

var hashtable = formatArray(countries, 'code', 'nEntries');

// hashtable is now [{UK: 10}, {FR: 15}, {ESP: 30}],
// countries is still [{code: 'UK', nEntries: 10}, {code: 'FR', nEntries: 15}, {code: 'ESP', nEntries: 4}]
```
