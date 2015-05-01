'use strict';

let _each = function(arr, iterator) {
  for (let i = 0; i < arr.length; i += 1) {
    iterator(arr[i], i, arr);
  }
};

let _map = function(arr, iterator) {
  if (arr.map) {
    return arr.map(iterator);
  }
  let results = [];
  _each(arr, function(x, i, a) {
    results.push(iterator(x, i, a));
  });
  return results;
};

module.exports = function (arr, key, target) {
  return _map(arr, function(obj) {
    let rObj = {};
    rObj[obj[key]] = obj[target];
    return rObj;
  });
};
