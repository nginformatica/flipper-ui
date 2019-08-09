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

var _react = _interopRequireWildcard(require("react"));

var _Node = _interopRequireDefault(require("./Node"));

var Tree =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Tree, _Component);

  function Tree() {
    (0, _classCallCheck2["default"])(this, Tree);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Tree).apply(this, arguments));
  }

  (0, _createClass2["default"])(Tree, [{
    key: "renderNode",
    value: function renderNode(node, index) {
      var root = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var id = node.id,
          name = node.name,
          nodes = node.nodes;
      return _react["default"].createElement(_Node["default"], {
        id: index,
        name: name,
        key: id || index,
        style: root ? {
          padding: 0
        } : {}
      }, nodes && nodes.map(this.renderNode.bind(this)));
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return (this.props.nodes || []).map(function (node, index) {
        return _this.renderNode(node, index, true);
      });
    }
  }]);
  return Tree;
}(_react.Component);

var _default = Tree;
exports["default"] = _default;