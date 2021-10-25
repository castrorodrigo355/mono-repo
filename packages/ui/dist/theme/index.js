"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.themes = void 0;

var _light = _interopRequireDefault(require("./light"));

var _dark = _interopRequireDefault(require("./dark"));

var themes = {
  light: _light["default"],
  dark: _dark["default"]
};
exports.themes = themes;