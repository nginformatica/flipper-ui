"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _react = _interopRequireDefault(require("react"));

var InputAdornment = function InputAdornment(_ref) {
  var children = _ref.children,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["children"]);
  return _react["default"].createElement(_InputAdornment["default"], otherProps, children);
};

var _default = InputAdornment;
exports["default"] = _default;