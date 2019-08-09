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

var _react = _interopRequireWildcard(require("react"));

var _TextField = _interopRequireDefault(require("./TextField"));

var _reactNumberFormat = _interopRequireDefault(require("react-number-format"));

var MaskField =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(MaskField, _Component);

  function MaskField() {
    (0, _classCallCheck2["default"])(this, MaskField);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(MaskField).apply(this, arguments));
  }

  (0, _createClass2["default"])(MaskField, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          customInput = _this$props.customInput,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["customInput"]);
      return (// Although react-number-format allow use of additional props,
        // shows problem with some props like have been do this
        // actually on flipper-ui. (e.g. errors treatment)
        // @ts-ignore
        _react["default"].createElement(_reactNumberFormat["default"], (0, _extends2["default"])({}, otherProps, {
          customInput: customInput || _TextField["default"]
        }))
      );
    }
  }]);
  return MaskField;
}(_react.Component);

var _default = MaskField;
exports["default"] = _default;