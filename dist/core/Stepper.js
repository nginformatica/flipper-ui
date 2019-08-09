"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Step = _interopRequireDefault(require("@material-ui/core/Step"));

var _StepLabel = _interopRequireDefault(require("@material-ui/core/StepLabel"));

var _Stepper = _interopRequireDefault(require("@material-ui/core/Stepper"));

var _react = _interopRequireWildcard(require("react"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var isActive = function isActive(index, active) {
  return active !== undefined ? active >= index : undefined;
};

var Stepper =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Stepper, _Component);

  function Stepper() {
    (0, _classCallCheck2["default"])(this, Stepper);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Stepper).apply(this, arguments));
  }

  (0, _createClass2["default"])(Stepper, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          bottomLabel = _this$props.bottomLabel,
          steps = _this$props.steps,
          padding = _this$props.padding,
          margin = _this$props.margin,
          _this$props$style = _this$props.style,
          style = _this$props$style === void 0 ? {} : _this$props$style,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["active", "bottomLabel", "steps", "padding", "margin", "style"]);
      return _react["default"].createElement(_Stepper["default"], (0, _extends2["default"])({
        alternativeLabel: bottomLabel,
        activeStep: active,
        style: _objectSpread({
          padding: padding,
          margin: margin
        }, style)
      }, otherProps), steps.map(function (step, index) {
        return _react["default"].createElement(_Step["default"], {
          key: index
        }, _react["default"].createElement(_StepLabel["default"], {
          icon: (0, _typeof2["default"])(step) === 'object' ? typeof step.icon === 'function' ? step.icon(isActive(index, active)) : _react["default"].cloneElement(step.icon, {
            active: isActive(index, active),
            color: isActive(index, active) ? 'primary' : 'default'
          }) : index + 1
        }, (0, _typeof2["default"])(step) === 'object' ? step.label : step));
      }));
    }
  }]);
  return Stepper;
}(_react.Component);

(0, _defineProperty2["default"])(Stepper, "defaultProps", {
  active: 0
});
var _default = Stepper;
exports["default"] = _default;