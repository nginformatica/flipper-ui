"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));

var _withStyles = _interopRequireDefault(require("@material-ui/styles/withStyles"));

var _react = _interopRequireDefault(require("react"));

var styles = function styles(theme) {
  return {
    primary: {
      backgroundColor: theme.palette.primary.main
    }
  };
};

var Avatar = function Avatar(_ref) {
  var children = _ref.children,
      primary = _ref.primary,
      className = _ref.className,
      classes = _ref.classes,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["children", "primary", "className", "classes"]);
  return _react["default"].createElement(_Avatar["default"], (0, _extends2["default"])({}, otherProps, {
    className: "".concat(className, " ").concat(primary ? classes.primary : '')
  }), children);
};

var _default = (0, _withStyles["default"])(styles)(Avatar);

exports["default"] = _default;