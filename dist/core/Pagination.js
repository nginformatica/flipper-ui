"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _inc = _interopRequireDefault(require("ramda/es/inc"));

var _times = _interopRequireDefault(require("ramda/es/times"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _KeyboardArrowLeft = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowLeft"));

var _KeyboardArrowRight = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowRight"));

var _Button = _interopRequireDefault(require("./Button"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    align-items: center;\n    font-family: 'Roboto', sans-serif;\n    justify-content: center;\n    margin: 0.75em;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Content = _styledComponents["default"].div(_templateObject());

var Pagination =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Pagination, _Component);

  function Pagination() {
    (0, _classCallCheck2["default"])(this, Pagination);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Pagination).apply(this, arguments));
  }

  (0, _createClass2["default"])(Pagination, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          active = _this$props.active,
          style = _this$props.style,
          padding = _this$props.padding,
          margin = _this$props.margin,
          _this$props$pages = _this$props.pages,
          pages = _this$props$pages === void 0 ? 1 : _this$props$pages,
          className = _this$props.className;
      var allPages = (0, _times["default"])(_inc["default"], pages || 1);
      return _react["default"].createElement(Content, {
        className: className,
        style: _objectSpread({
          padding: padding,
          margin: margin
        }, style)
      }, _react["default"].createElement(_Button["default"], {
        size: "small",
        onClick: this.props.onPrevious
      }, _react["default"].createElement(_KeyboardArrowLeft["default"], null)), allPages.map(function (page) {
        return _react["default"].createElement(_Button["default"], {
          size: "small",
          key: page,
          color: page === active ? 'primary' : 'default',
          onClick: function onClick() {
            return _this.props.onNavigate(page);
          }
        }, page);
      }), _react["default"].createElement(_Button["default"], {
        size: "small",
        onClick: this.props.onNext
      }, _react["default"].createElement(_KeyboardArrowRight["default"], null)));
    }
  }]);
  return Pagination;
}(_react.Component);

var _default = Pagination;
exports["default"] = _default;