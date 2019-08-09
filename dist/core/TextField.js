"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.styles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _withStyles = _interopRequireDefault(require("@material-ui/styles/withStyles"));

var _react = _interopRequireDefault(require("react"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var styles = function styles() {
  return {
    input: {
      fontSize: '14px',
      padding: '10px',
      height: 'auto'
    },
    outlinedInput: {
      fontSize: '14px',
      padding: '10px',
      height: 'auto'
    },
    outlinedLabel: {
      fontSize: '14px',
      transform: 'translate(14px, 13px) scale(1)'
    },
    outlinedMultiline: {
      padding: '0px'
    }
  };
};

exports.styles = styles;

var TextField = function TextField(_ref) {
  var margin = _ref.margin,
      padding = _ref.padding,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      error = _ref.error,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'outlined' : _ref$variant,
      _ref$InputLabelProps = _ref.InputLabelProps,
      InputLabelProps = _ref$InputLabelProps === void 0 ? {} : _ref$InputLabelProps,
      _ref$InputProps = _ref.InputProps,
      InputProps = _ref$InputProps === void 0 ? {} : _ref$InputProps,
      classes = _ref.classes,
      _ref$autoComplete = _ref.autoComplete,
      autoComplete = _ref$autoComplete === void 0 ? 'off' : _ref$autoComplete,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["margin", "padding", "style", "error", "variant", "InputLabelProps", "InputProps", "classes", "autoComplete"]);
  return _react["default"].createElement(_TextField["default"], (0, _extends2["default"])({
    autoComplete: autoComplete,
    error: error,
    variant: variant,
    style: _objectSpread({
      margin: margin,
      padding: padding
    }, style),
    InputLabelProps: _objectSpread({
      classes: {
        outlined: variant === 'outlined' ? classes.outlinedLabel : ''
      }
    }, InputLabelProps),
    InputProps: _objectSpread({
      classes: {
        input: variant === 'outlined' ? classes.outlinedInput : '',
        multiline: variant === 'outlined' ? classes.outlinedMultiline : ''
      }
    }, InputProps)
  }, otherProps));
};

var _default = (0, _withStyles["default"])(styles)(TextField);

exports["default"] = _default;