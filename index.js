'use strict';

const Util = require('./util');

class ReformatArray {

  static mapToDictionary(arr, key, target) {
    const rObj = {};
    Util.each(arr, function(obj) {
      rObj[obj[key]] = obj[target];
    });
    return rObj;
  }

  static mapToArray(arr, key, target) {
    return Util.map(arr, function(obj) {
      const rObj = {};
      rObj[obj[key]] = obj[target];
      return rObj;
    });
  }

}

module.exports = ReformatArray;
