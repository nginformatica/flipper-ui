"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _Switch = _interopRequireDefault(require("@material-ui/core/Switch"));

var _react = _interopRequireWildcard(require("react"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Checkbox =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Checkbox, _Component);

  function Checkbox() {
    (0, _classCallCheck2["default"])(this, Checkbox);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Checkbox).apply(this, arguments));
  }

  (0, _createClass2["default"])(Checkbox, [{
    key: "renderCheckbox",
    value: function renderCheckbox() {
      return _react["default"].createElement(_Checkbox["default"], {
        checked: this.props.checked,
        value: this.props.name,
        color: this.props.color,
        disabled: this.props.disabled,
        onChange: this.props.onChange
      });
    }
  }, {
    key: "renderSwitch",
    value: function renderSwitch() {
      return _react["default"].createElement(_Switch["default"], {
        checked: this.props.checked,
        value: this.props.name,
        color: this.props.color,
        disabled: this.props.disabled,
        onChange: this.props.onChange
      });
    }
  }, {
    key: "renderControl",
    value: function renderControl() {
      return this.props.type === 'checkbox' ? this.renderCheckbox() : this.renderSwitch();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          _this$props$style = _this$props.style,
          style = _this$props$style === void 0 ? {} : _this$props$style,
          padding = _this$props.padding,
          margin = _this$props.margin,
          className = _this$props.className;
      return label ? _react["default"].createElement(_FormControlLabel["default"], {
        style: _objectSpread({
          padding: padding,
          margin: margin
        }, style),
        className: className,
        label: label,
        control: this.renderControl()
      }) : this.renderControl();
    }
  }]);
  return Checkbox;
}(_react.Component);

(0, _defineProperty2["default"])(Checkbox, "defaultProps", {
  type: 'checkbox'
});
var _default = Checkbox;
exports["default"] = _default;