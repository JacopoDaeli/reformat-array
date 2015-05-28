'use strict';

class Util {

  static each(arr, iterator) {
    for (let i = 0; i < arr.length; i += 1) {
      iterator(arr[i], i, arr)
    }
  }

  static map(arr, iterator) {
    if (arr.map) {
      return arr.map(iterator)
    }
    const results = []
    Util.each(arr, function(x, i, a) {
      results.push(iterator(x, i, a))
    })
    return results
  }

}

module.exports = Util;
