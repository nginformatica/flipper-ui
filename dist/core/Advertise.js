"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _colors = require("../colors");

var _Paper = _interopRequireDefault(require("./Paper"));

var _Typography = _interopRequireDefault(require("./Typography"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var styles = {
  border: {
    borderLeft: "1px solid ".concat(_colors.background.dark)
  }
};

var Advertise = function Advertise(_ref) {
  var comment = _ref.comment,
      author = _ref.author,
      _ref$padding = _ref.padding,
      padding = _ref$padding === void 0 ? 4 : _ref$padding,
      _ref$commentStyle = _ref.commentStyle,
      commentStyle = _ref$commentStyle === void 0 ? {} : _ref$commentStyle,
      _ref$authorStyle = _ref.authorStyle,
      authorStyle = _ref$authorStyle === void 0 ? {} : _ref$authorStyle,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["comment", "author", "padding", "commentStyle", "authorStyle"]);
  return _react["default"].createElement(_Paper["default"], (0, _extends2["default"])({
    padding: padding
  }, otherProps), _react["default"].createElement(_Typography["default"], {
    margin: "12px 12px 0px",
    padding: "6px 18px",
    style: _objectSpread({}, styles.border, {}, commentStyle)
  }, comment), _react["default"].createElement(_Typography["default"], {
    margin: "0px 12px 12px",
    padding: "6px 18px",
    variant: "caption",
    style: _objectSpread({}, styles.border, {}, authorStyle)
  }, author));
};

var _default = Advertise;
exports["default"] = _default;