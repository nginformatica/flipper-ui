"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _FormLabel = _interopRequireDefault(require("@material-ui/core/FormLabel"));

var _Radio = _interopRequireDefault(require("@material-ui/core/Radio"));

var _RadioGroup = _interopRequireDefault(require("@material-ui/core/RadioGroup"));

var _react = _interopRequireDefault(require("react"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var RadioGroup = function RadioGroup(_ref) {
  var _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      className = _ref.className,
      padding = _ref.padding,
      margin = _ref.margin,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      title = _ref.title,
      value = _ref.value,
      onChange = _ref.onChange,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["options", "className", "padding", "margin", "style", "title", "value", "onChange"]);
  return _react["default"].createElement(_FormControl["default"], (0, _extends2["default"])({
    className: className,
    style: _objectSpread({
      padding: padding,
      margin: margin
    }, style)
  }, otherProps), _react["default"].createElement(_FormLabel["default"], {
    component: "legend"
  }, title), _react["default"].createElement(_RadioGroup["default"], {
    name: name,
    value: value,
    onChange: onChange
  }, options.map(function (option) {
    return _react["default"].createElement(_FormControlLabel["default"], {
      key: option.value,
      label: option.label,
      value: option.value,
      control: _react["default"].createElement(_Radio["default"], null)
    });
  })));
};

var _default = RadioGroup;
exports["default"] = _default;