"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var add = function add(x, y) {
  return x + y;
};

var minus = exports.minus = function minus(x, y) {
  // added patch
  return x - y;
};

exports.default = add;