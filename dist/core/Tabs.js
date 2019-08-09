"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Tabs = _interopRequireDefault(require("@material-ui/core/Tabs"));

var _withStyles = _interopRequireDefault(require("@material-ui/styles/withStyles"));

var _react = _interopRequireWildcard(require("react"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var styles = function styles(theme) {
  return {
    "default": {
      backgroundColor: theme.palette.background["default"],
      color: theme.palette.text.primary
    },
    indicator: {
      height: 0,
      opacity: 0,
      width: 0
    },
    inherit: {
      backgroundColor: 'inherit',
      color: 'inherit'
    },
    primary: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrastText
    },
    secondary: {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.secondary.contrastText
    }
  };
};

var Tabs =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Tabs, _Component);

  function Tabs() {
    (0, _classCallCheck2["default"])(this, Tabs);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Tabs).apply(this, arguments));
  }

  (0, _createClass2["default"])(Tabs, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          _this$props$color = _this$props.color,
          color = _this$props$color === void 0 ? 'primary' : _this$props$color,
          className = _this$props.className,
          classes = _this$props.classes,
          style = _this$props.style,
          padding = _this$props.padding,
          margin = _this$props.margin,
          _this$props$variant = _this$props.variant,
          variant = _this$props$variant === void 0 ? 'standard' : _this$props$variant,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["children", "color", "className", "classes", "style", "padding", "margin", "variant"]);
      return _react["default"].createElement(_Tabs["default"], (0, _extends2["default"])({}, otherProps, {
        variant: variant,
        style: _objectSpread({
          padding: padding,
          margin: margin
        }, style),
        className: classes ? "".concat(classes[color], " ").concat(className) : '',
        classes: classes ? {
          indicator: classes.indicator
        } : {}
      }), children);
    }
  }]);
  return Tabs;
}(_react.Component);

(0, _defineProperty2["default"])(Tabs, "defaultProps", {
  centered: true,
  padding: '6px 0 0'
});

var _default = (0, _withStyles["default"])(styles)(Tabs);

exports["default"] = _default;