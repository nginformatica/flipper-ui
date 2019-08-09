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

var _Tab = _interopRequireDefault(require("@material-ui/core/Tab"));

var _withStyles = _interopRequireDefault(require("@material-ui/styles/withStyles"));

var _react = _interopRequireWildcard(require("react"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var styles = function styles(theme) {
  return {
    root: {
      backgroundColor: theme.palette.primary.main,
      boxShadow: theme.shadows[4],
      color: theme.palette.primary.contrastText
    },
    selected: {
      backgroundColor: theme.palette.background["default"],
      color: theme.palette.text.primary
    }
  };
};

var Tab =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Tab, _Component);

  function Tab() {
    (0, _classCallCheck2["default"])(this, Tab);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Tab).apply(this, arguments));
  }

  (0, _createClass2["default"])(Tab, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          style = _this$props.style,
          margin = _this$props.margin,
          padding = _this$props.padding,
          selectedClass = _this$props.selectedClass,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["classes", "style", "margin", "padding", "selectedClass"]);
      return _react["default"].createElement(_Tab["default"], (0, _extends2["default"])({
        classes: {
          root: classes.root,
          selected: "".concat(classes.selected, " ").concat(selectedClass)
        },
        style: _objectSpread({
          margin: margin,
          padding: padding
        }, style)
      }, otherProps));
    }
  }]);
  return Tab;
}(_react.Component);

(0, _defineProperty2["default"])(Tab, "defaultProps", {
  disabled: false,
  margin: '0 4px'
});

var _default = (0, _withStyles["default"])(styles)(Tab);

exports["default"] = _default;