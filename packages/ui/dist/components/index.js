"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _NewSpaceButton = require("./NewSpaceButton");

Object.keys(_NewSpaceButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _NewSpaceButton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _NewSpaceButton[key];
    }
  });
});