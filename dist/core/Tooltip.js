"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _react = _interopRequireDefault(require("react"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Tooltip = function Tooltip(_ref) {
  var children = _ref.children,
      withWrapper = _ref.withWrapper,
      wrapperStyle = _ref.wrapperStyle,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["children", "withWrapper", "wrapperStyle"]);
  return _react["default"].createElement(_Tooltip["default"], otherProps, withWrapper ? _react["default"].createElement("div", {
    style: _objectSpread({
      display: 'inherit'
    }, wrapperStyle)
  }, children) : children);
};

var _default = Tooltip;
exports["default"] = _default;