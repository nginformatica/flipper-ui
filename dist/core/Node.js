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

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _evolve = _interopRequireDefault(require("ramda/es/evolve"));

var _not = _interopRequireDefault(require("ramda/es/not"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../colors");

var _KeyboardArrowDown = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowDown"));

var _KeyboardArrowUp = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowUp"));

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: 16px;\n    margin: 12px;\n    background: ", ";\n    padding: 12px;\n    padding-left: ", ";\n    list-style: none;\n    border-radius: 6px;\n    border: 1px solid ", ";\n    transition: all 500ms ease;\n    cursor: pointer;\n    align-items: center;\n    display: flex;\n    &:hover {\n        background: ", ";\n        border: 1px solid ", ";\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    width: 350px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var styles = {
  icon: {
    fontSize: '24px',
    marginRight: '12px'
  }
};

var Ul = _styledComponents["default"].ul(_templateObject());

var Li = _styledComponents["default"].li(_templateObject2(), _colors.transparent, function (props) {
  return props.inset ? '12px' : '48px';
}, _colors.background.dark, _colors.background.light, _colors.primary.normal);

var Node =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Node, _Component);

  function Node(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Node);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Node).call(this, props));
    _this.state = {
      open: false
    };
    return _this;
  }

  (0, _createClass2["default"])(Node, [{
    key: "handleToggleOpen",
    value: function handleToggleOpen() {
      this.setState((0, _evolve["default"])({
        open: _not["default"]
      }));
    }
  }, {
    key: "renderDropdownIcon",
    value: function renderDropdownIcon() {
      return this.state.open ? _react["default"].createElement(_KeyboardArrowUp["default"], {
        style: styles.icon
      }) : _react["default"].createElement(_KeyboardArrowDown["default"], {
        style: styles.icon
      });
    }
  }, {
    key: "render",
    value: function render() {
      var open = this.state.open;
      var _this$props = this.props,
          id = _this$props.id,
          name = _this$props.name,
          children = _this$props.children,
          _this$props$style = _this$props.style,
          style = _this$props$style === void 0 ? {} : _this$props$style,
          className = _this$props.className;
      return _react["default"].createElement(Ul, {
        key: id || name,
        style: style,
        className: className
      }, _react["default"].createElement(Li, {
        inset: Boolean(children),
        onClick: this.handleToggleOpen.bind(this)
      }, children && this.renderDropdownIcon(), name), open && children);
    }
  }]);
  return Node;
}(_react.Component);

var _default = Node;
exports["default"] = _default;