"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icons = require("@material-ui/icons");

Object.keys(_icons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _icons[key];
    }
  });
});