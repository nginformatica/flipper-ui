"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _Menu = _interopRequireDefault(require("@material-ui/core/Menu"));

var _react = _interopRequireDefault(require("react"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Menu = function Menu(_ref) {
  var children = _ref.children,
      padding = _ref.padding,
      margin = _ref.margin,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      withWrapper = _ref.withWrapper,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["children", "padding", "margin", "style", "withWrapper"]);
  return _react["default"].createElement(_Menu["default"], (0, _extends2["default"])({}, otherProps, {
    style: _objectSpread({
      padding: padding,
      margin: margin
    }, style)
  }), withWrapper ? _react["default"].createElement("div", null, children) : children);
};

var _default = Menu;
exports["default"] = _default;