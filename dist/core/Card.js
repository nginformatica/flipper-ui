"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CardHeader = exports.CardMedia = exports.CardContent = exports.CardActions = exports.CardActionArea = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardActionArea = _interopRequireDefault(require("@material-ui/core/CardActionArea"));

var _CardActions = _interopRequireDefault(require("@material-ui/core/CardActions"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _CardMedia = _interopRequireDefault(require("@material-ui/core/CardMedia"));

var _CardHeader = _interopRequireDefault(require("@material-ui/core/CardHeader"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var CardActionArea = function CardActionArea(_ref) {
  var margin = _ref.margin,
      padding = _ref.padding,
      style = _ref.style,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["margin", "padding", "style"]);
  return _react["default"].createElement(_CardActionArea["default"], (0, _extends2["default"])({}, otherProps, {
    style: _objectSpread({
      padding: padding,
      margin: margin
    }, style)
  }), otherProps.children);
};

exports.CardActionArea = CardActionArea;

var CardActions = function CardActions(_ref2) {
  var margin = _ref2.margin,
      padding = _ref2.padding,
      style = _ref2.style,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref2, ["margin", "padding", "style"]);
  return _react["default"].createElement(_CardActions["default"], (0, _extends2["default"])({}, otherProps, {
    style: _objectSpread({
      padding: padding,
      margin: margin
    }, style)
  }), otherProps.children);
};

exports.CardActions = CardActions;

var CardContent = function CardContent(_ref3) {
  var margin = _ref3.margin,
      padding = _ref3.padding,
      style = _ref3.style,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref3, ["margin", "padding", "style"]);
  return _react["default"].createElement(_CardContent["default"], (0, _extends2["default"])({}, otherProps, {
    style: _objectSpread({
      padding: padding,
      margin: margin
    }, style)
  }), otherProps.children);
};

exports.CardContent = CardContent;

var CardMedia = function CardMedia(_ref4) {
  var margin = _ref4.margin,
      padding = _ref4.padding,
      style = _ref4.style,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref4, ["margin", "padding", "style"]);
  return _react["default"].createElement(_CardMedia["default"], (0, _extends2["default"])({}, otherProps, {
    style: _objectSpread({
      padding: padding,
      margin: margin
    }, style)
  }), otherProps.children);
};

exports.CardMedia = CardMedia;

var CardHeader = function CardHeader(_ref5) {
  var margin = _ref5.margin,
      padding = _ref5.padding,
      style = _ref5.style,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref5, ["margin", "padding", "style"]);
  return _react["default"].createElement(_CardHeader["default"], (0, _extends2["default"])({}, otherProps, {
    style: _objectSpread({
      padding: padding,
      margin: margin
    }, style)
  }), otherProps.children);
};

exports.CardHeader = CardHeader;

var Card = function Card(_ref6) {
  var margin = _ref6.margin,
      padding = _ref6.padding,
      style = _ref6.style,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref6, ["margin", "padding", "style"]);
  return _react["default"].createElement(_Card["default"], (0, _extends2["default"])({}, otherProps, {
    style: _objectSpread({
      padding: padding,
      margin: margin
    }, style)
  }), otherProps.children);
};

var _default = Card;
exports["default"] = _default;