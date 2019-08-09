"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));

var _react = _interopRequireDefault(require("react"));

var _colors = require("../colors");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var TableRow = function TableRow(_ref) {
  var style = _ref.style,
      margin = _ref.margin,
      padding = _ref.padding,
      children = _ref.children,
      background = _ref.background,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["style", "margin", "padding", "children", "background"]);
  return _react["default"].createElement(_TableRow["default"], (0, _extends2["default"])({}, otherProps, {
    style: _objectSpread({
      background: background,
      borderColor: _colors.background.light,
      margin: margin,
      padding: padding
    }, style)
  }), children);
};

var _default = TableRow;
exports["default"] = _default;