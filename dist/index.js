"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var addNumbers = function addNumbers(x, y) {
  return x + y;
};

var minusNumbers = exports.minusNumbers = function minusNumbers(x, y) {
  // added patch, blah
  return x - y;
};

var multiply = exports.multiply = function multiply(x, y) {
  return x * y;
};

exports.default = addNumbers;