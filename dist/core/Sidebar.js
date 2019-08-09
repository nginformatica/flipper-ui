"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _Drawer = _interopRequireDefault(require("@material-ui/core/Drawer"));

var _withStyles = _interopRequireDefault(require("@material-ui/styles/withStyles"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _KeyboardArrowLeft = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowLeft"));

var _KeyboardArrowRight = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowRight"));

var _Button = _interopRequireDefault(require("./Button"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    flex-direction: ", ";\n    display: flex;\n    padding: 4px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var styles = function styles(theme) {
  return {
    button: {
      '&:active': {
        boxShadow: 'none'
      },
      'alignSelf': 'right',
      'backgroundColor': 'transparent',
      'boxShadow': 'none',
      'maxWidth': 'inherit',
      'minWidth': 'auto',
      'width': '100%'
    },
    "default": {
      backgroundColor: theme.palette.background["default"],
      color: theme.palette.background.contrastText
    },
    icon: {
      fontSize: '24px'
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
    },
    sidebar: {
      bottom: '0px',
      left: '0px',
      position: 'fixed',
      top: 'inherit',
      width: 'inherit'
    }
  };
};

var Action = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.anchor === 'left' ? 'row-reverse' : 'row';
});

var Sidebar =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Sidebar, _Component);

  function Sidebar() {
    (0, _classCallCheck2["default"])(this, Sidebar);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Sidebar).apply(this, arguments));
  }

  (0, _createClass2["default"])(Sidebar, [{
    key: "renderAction",
    value: function renderAction() {
      var _this$props = this.props,
          _this$props$expanded = _this$props.expanded,
          expanded = _this$props$expanded === void 0 ? true : _this$props$expanded,
          _this$props$anchor = _this$props.anchor,
          anchor = _this$props$anchor === void 0 ? 'left' : _this$props$anchor,
          _this$props$color = _this$props.color,
          color = _this$props$color === void 0 ? 'default' : _this$props$color,
          _this$props$minWidth = _this$props.minWidth,
          minWidth = _this$props$minWidth === void 0 ? 72 : _this$props$minWidth,
          ButtonProps = _this$props.ButtonProps,
          classes = _this$props.classes;
      var iconToLeft = anchor === 'left' && expanded || anchor === 'right' && !expanded;
      return _react["default"].createElement(Action, {
        anchor: anchor
      }, _react["default"].createElement(_Button["default"], (0, _extends2["default"])({
        name: "button-".concat(name || 'sidebar'),
        color: color,
        variant: "contained",
        className: classes.button,
        style: {
          maxWidth: minWidth
        },
        onClick: this.props.onToggle
      }, ButtonProps), iconToLeft ? _react["default"].createElement(_KeyboardArrowLeft["default"], {
        className: classes.icon
      }) : _react["default"].createElement(_KeyboardArrowRight["default"], {
        className: classes.icon
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          id = _this$props2.id,
          _this$props2$anchor = _this$props2.anchor,
          anchor = _this$props2$anchor === void 0 ? 'left' : _this$props2$anchor,
          className = _this$props2.className,
          classes = _this$props2.classes,
          _this$props2$color = _this$props2.color,
          color = _this$props2$color === void 0 ? 'default' : _this$props2$color,
          _this$props2$docked = _this$props2.docked,
          docked = _this$props2$docked === void 0 ? false : _this$props2$docked,
          _this$props2$expanded = _this$props2.expanded,
          expanded = _this$props2$expanded === void 0 ? true : _this$props2$expanded,
          margin = _this$props2.margin,
          _this$props2$maxWidth = _this$props2.maxWidth,
          maxWidth = _this$props2$maxWidth === void 0 ? 220 : _this$props2$maxWidth,
          _this$props2$minWidth = _this$props2.minWidth,
          minWidth = _this$props2$minWidth === void 0 ? 72 : _this$props2$minWidth,
          _this$props2$top = _this$props2.top,
          top = _this$props2$top === void 0 ? 64 : _this$props2$top,
          open = _this$props2.open,
          padding = _this$props2.padding,
          paperClasses = _this$props2.paperClasses,
          _this$props2$showButt = _this$props2.showButton,
          showButton = _this$props2$showButt === void 0 ? true : _this$props2$showButt,
          style = _this$props2.style,
          _this$props2$variant = _this$props2.variant,
          variant = _this$props2$variant === void 0 ? 'permanent' : _this$props2$variant;
      var width = expanded ? maxWidth : minWidth;
      return _react["default"].createElement(_Drawer["default"], {
        id: id,
        open: open,
        anchor: anchor,
        variant: variant,
        className: className,
        style: _objectSpread({
          width: width,
          padding: padding,
          margin: margin,
          top: top
        }, style),
        PaperProps: {
          className: "".concat(docked ? classes.sidebar : '', " ").concat(classes[color]),
          classes: paperClasses
        }
      }, showButton && this.renderAction(), this.props.children);
    }
  }]);
  return Sidebar;
}(_react.Component);

var _default = (0, _withStyles["default"])(styles)(Sidebar);

exports["default"] = _default;