"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    border-style: ", ";\n    opacity: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Button = function Button(_ref) {
  var children = _ref.children,
      margin = _ref.margin,
      padding = _ref.padding,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      variant = _ref.variant,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["children", "margin", "padding", "style", "variant"]);
  return _react["default"].createElement(_Button["default"], (0, _extends2["default"])({}, otherProps, {
    variant: variant === 'dashed' ? 'outlined' : variant,
    style: _objectSpread({
      margin: margin,
      padding: padding
    }, style)
  }), children);
};

var ButtonStyled = (0, _styledComponents["default"])(Button)(_templateObject(), function (props) {
  return props.variant === 'dashed' ? 'dashed !important' : 'initial';
}, function (props) {
  return props.selected ? 0.5 : 1;
});
var _default = ButtonStyled;
exports["default"] = _default;