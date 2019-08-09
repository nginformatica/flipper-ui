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

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemAvatar = _interopRequireDefault(require("@material-ui/core/ListItemAvatar"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _ListItemSecondaryAction = _interopRequireDefault(require("@material-ui/core/ListItemSecondaryAction"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _withStyles = _interopRequireDefault(require("@material-ui/styles/withStyles"));

var _react = _interopRequireWildcard(require("react"));

var _Typography = _interopRequireDefault(require("./Typography"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var styles = function styles() {
  return {
    "default": {
      color: 'inherit'
    }
  };
};

var ListItem =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(ListItem, _Component);

  function ListItem() {
    (0, _classCallCheck2["default"])(this, ListItem);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ListItem).apply(this, arguments));
  }

  (0, _createClass2["default"])(ListItem, [{
    key: "renderChildren",
    value: function renderChildren() {
      return typeof this.props.children === 'string' ? _react["default"].createElement(_Typography["default"], null, this.props.children) : this.props.children;
    }
  }, {
    key: "renderCustomItem",
    value: function renderCustomItem() {
      var _this$props = this.props,
          action = _this$props.action,
          avatar = _this$props.avatar,
          icon = _this$props.icon,
          title = _this$props.title,
          subtitle = _this$props.subtitle,
          classes = _this$props.classes;
      var minWidth = title || subtitle ? '42px' : '0px';
      var className = classes["default"];
      return _react["default"].createElement(_react.Fragment, null, avatar && _react["default"].createElement(_ListItemAvatar["default"], null, avatar), icon && _react["default"].createElement(_ListItemIcon["default"], {
        className: className,
        style: {
          minWidth: minWidth
        }
      }, icon), (title || subtitle) && _react["default"].createElement(_ListItemText["default"], {
        primaryTypographyProps: {
          className: className
        },
        secondaryTypographyProps: {
          className: className
        },
        primary: title,
        secondary: subtitle,
        style: action ? {
          marginRight: '36px'
        } : {}
      }), action && _react["default"].createElement(_ListItemSecondaryAction["default"], {
        className: className
      }, action));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          id = _this$props2.id,
          className = _this$props2.className,
          children = _this$props2.children,
          value = _this$props2.value,
          _this$props2$style = _this$props2.style,
          style = _this$props2$style === void 0 ? {} : _this$props2$style,
          padding = _this$props2.padding,
          margin = _this$props2.margin,
          selected = _this$props2.selected,
          disabled = _this$props2.disabled,
          onClick = _this$props2.onClick;
      return children ? _react["default"].createElement(_MenuItem["default"], {
        button: true,
        id: id,
        style: _objectSpread({
          padding: padding,
          margin: margin
        }, style),
        className: className,
        selected: selected,
        disabled: disabled,
        value: value,
        onClick: onClick
      }, this.renderChildren()) : _react["default"].createElement(_ListItem["default"], {
        button: true,
        id: id,
        style: _objectSpread({
          padding: padding,
          margin: margin
        }, style),
        className: className,
        selected: selected,
        disabled: disabled,
        onClick: onClick
      }, this.renderCustomItem());
    }
  }]);
  return ListItem;
}(_react.Component);

var _default = (0, _withStyles["default"])(styles)(ListItem);

exports["default"] = _default;