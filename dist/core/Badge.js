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

var _Badge = _interopRequireDefault(require("@material-ui/core/Badge"));

var _react = _interopRequireWildcard(require("react"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Badge =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Badge, _Component);

  function Badge() {
    (0, _classCallCheck2["default"])(this, Badge);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Badge).apply(this, arguments));
  }

  (0, _createClass2["default"])(Badge, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          counter = _this$props.counter,
          color = _this$props.color,
          _this$props$limit = _this$props.limit,
          limit = _this$props$limit === void 0 ? 99 : _this$props$limit,
          padding = _this$props.padding,
          margin = _this$props.margin,
          _this$props$style = _this$props.style,
          style = _this$props$style === void 0 ? {} : _this$props$style,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["children", "counter", "color", "limit", "padding", "margin", "style"]);
      return counter ? _react["default"].createElement(_Badge["default"], (0, _extends2["default"])({
        badgeContent: counter > limit ? "+".concat(limit) : counter,
        color: color,
        style: _objectSpread({
          padding: padding,
          margin: margin
        }, style)
      }, otherProps), children) : children;
    }
  }]);
  return Badge;
}(_react.Component);

(0, _defineProperty2["default"])(Badge, "defaultProps", {
  color: 'primary',
  limit: 99
});
var _default = Badge;
exports["default"] = _default;