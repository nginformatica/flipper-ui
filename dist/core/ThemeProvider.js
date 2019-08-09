"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var _react = _interopRequireDefault(require("react"));

var ThemeProvider = function ThemeProvider(_ref) {
  var _ref$options = _ref.options,
      options = _ref$options === void 0 ? {} : _ref$options,
      children = _ref.children;
  return _react["default"].createElement(_styles.MuiThemeProvider, {
    theme: (0, _styles.createMuiTheme)(options)
  }, children);
};

var _default = ThemeProvider;
exports["default"] = _default;