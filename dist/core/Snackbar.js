"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Snackbar = _interopRequireDefault(require("@material-ui/core/Snackbar"));

var _SnackbarContent = _interopRequireDefault(require("@material-ui/core/SnackbarContent"));

var _colors = require("@material-ui/core/colors");

var _withStyles = _interopRequireDefault(require("@material-ui/styles/withStyles"));

var _CheckCircle = _interopRequireDefault(require("@material-ui/icons/CheckCircle"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _Error = _interopRequireDefault(require("@material-ui/icons/Error"));

var _Info = _interopRequireDefault(require("@material-ui/icons/Info"));

var _Warning = _interopRequireDefault(require("@material-ui/icons/Warning"));

var _react = _interopRequireDefault(require("react"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var variants = {
  error: {
    color: _colors.red[700],
    icon: _Error["default"]
  },
  info: {
    color: _colors.blue[500],
    icon: _Info["default"]
  },
  success: {
    color: _colors.green[700],
    icon: _CheckCircle["default"]
  },
  warning: {
    color: _colors.amber[700],
    icon: _Warning["default"]
  }
};

var styles = function styles(theme) {
  return {
    icon: {
      fontSize: 20,
      marginRight: theme.spacing.unit,
      opacity: 0.9
    },
    message: {
      alignItems: 'center',
      display: 'flex'
    }
  };
};

var SnackBar = function SnackBar(props) {
  var id = props.id,
      action = props.action,
      anchorOrigin = props.anchorOrigin,
      _props$autoHide = props.autoHide,
      autoHide = _props$autoHide === void 0 ? 6000 : _props$autoHide,
      classes = props.classes,
      icon = props.icon,
      message = props.message,
      onClose = props.onClose,
      open = props.open,
      padding = props.padding,
      margin = props.margin,
      style = props.style,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'info' : _props$variant,
      className = props.className,
      TransitionComponent = props.TransitionComponent,
      TransitionProps = props.TransitionProps,
      other = (0, _objectWithoutProperties2["default"])(props, ["id", "action", "anchorOrigin", "autoHide", "classes", "icon", "message", "onClose", "open", "padding", "margin", "style", "variant", "className", "TransitionComponent", "TransitionProps"]);
  var Icon = variants[variant].icon;
  return _react["default"].createElement(_Snackbar["default"], {
    anchorOrigin: anchorOrigin,
    open: open,
    id: id,
    autoHideDuration: autoHide,
    style: _objectSpread({
      padding: padding,
      margin: margin
    }, style),
    className: className,
    TransitionComponent: TransitionComponent,
    TransitionProps: TransitionProps,
    onClose: onClose
  }, _react["default"].createElement(_SnackbarContent["default"], (0, _extends2["default"])({
    style: {
      backgroundColor: variants[variant].color
    },
    "aria-describedby": "client-snackbar",
    message: _react["default"].createElement("span", {
      id: "client-snackbar",
      className: classes.message
    }, icon || _react["default"].createElement(Icon, {
      className: classes.icon
    }), message),
    action: action || _react["default"].createElement(_IconButton["default"], {
      key: "close",
      "aria-label": "Close",
      color: "inherit",
      onClick: onClose
    }, _react["default"].createElement(_Close["default"], null))
  }, other)));
};

var _default = (0, _withStyles["default"])(styles)(SnackBar);

exports["default"] = _default;