"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _InputBase = _interopRequireDefault(require("@material-ui/core/InputBase"));

var _react = _interopRequireDefault(require("react"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var InputAdornment = function InputAdornment(_ref) {
  var margin = _ref.margin,
      padding = _ref.padding,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$autoComplete = _ref.autoComplete,
      autoComplete = _ref$autoComplete === void 0 ? 'off' : _ref$autoComplete,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["margin", "padding", "style", "autoComplete"]);
  return _react["default"].createElement(_InputBase["default"], (0, _extends2["default"])({
    autoComplete: autoComplete
  }, otherProps, {
    style: _objectSpread({
      padding: padding,
      margin: margin
    }, style)
  }));
};

var _default = InputAdornment;
exports["default"] = _default;