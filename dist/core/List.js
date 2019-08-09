"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListSubheader = _interopRequireDefault(require("@material-ui/core/ListSubheader"));

var _withStyles = _interopRequireDefault(require("@material-ui/styles/withStyles"));

var _react = _interopRequireDefault(require("react"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var styles = function styles(theme) {
  return {
    "default": {
      backgroundColor: theme.palette.background["default"],
      color: theme.palette.text.primary
    },
    inherit: {
      backgroundColor: 'inherit',
      color: 'inherit'
    },
    primary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },
    secondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    }
  };
};

var List = function List(_ref) {
  var title = _ref.title,
      padding = _ref.padding,
      margin = _ref.margin,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      children = _ref.children,
      className = _ref.className,
      classes = _ref.classes,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'default' : _ref$color,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["title", "padding", "margin", "style", "children", "className", "classes", "color"]);
  return _react["default"].createElement(_List["default"], (0, _extends2["default"])({
    subheader: title ? _react["default"].createElement(_ListSubheader["default"], {
      className: classes ? classes[color] : ''
    }, title) : undefined,
    className: classes ? "".concat(classes[color], " ").concat(className) : '',
    style: _objectSpread({
      padding: padding,
      margin: margin
    }, style)
  }, otherProps), children);
};

var _default = (0, _withStyles["default"])(styles)(List);

exports["default"] = _default;