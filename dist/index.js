"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var addNumbers = function addNumbers(x, y) {
  return x + y;
};

var minusNumbers = exports.minusNumbers = function minusNumbers(x, y) {
  // added patch
  return x - y;
};

exports.default = addNumbers;