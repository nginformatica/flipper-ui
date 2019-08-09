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

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogContentText = _interopRequireDefault(require("@material-ui/core/DialogContentText"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _react = _interopRequireWildcard(require("react"));

var _withStyles = _interopRequireDefault(require("@material-ui/styles/withStyles"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    position: relative;\n    height: inherit;\n    display: flex;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 16px 24px;\n    align-items: center;\n    display: flex;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var TitleWrapper = _styledComponents["default"].div(_templateObject());

var TitleAction = _styledComponents["default"].div(_templateObject2());

var Snippet = _styledComponents["default"].div(_templateObject3());

var SnippetContent = _styledComponents["default"].div(_templateObject4());

var styles = function styles() {
  return {
    root: {
      overflowY: 'unset'
    }
  };
};

var Dialog =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Dialog, _Component);

  function Dialog() {
    (0, _classCallCheck2["default"])(this, Dialog);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Dialog).apply(this, arguments));
  }

  (0, _createClass2["default"])(Dialog, [{
    key: "renderTitle",
    value: function renderTitle(title) {
      return this.props.titleAction ? _react["default"].createElement(TitleWrapper, {
        style: this.props.titleWrapperStyle
      }, _react["default"].createElement(_DialogTitle["default"], {
        style: _objectSpread({
          flex: 1
        }, this.props.titleStyle)
      }, title), _react["default"].createElement(TitleAction, {
        style: this.props.titleActionStyle
      }, this.props.titleAction)) : _react["default"].createElement(_DialogTitle["default"], {
        style: this.props.titleStyle
      }, title);
    }
  }, {
    key: "renderContent",
    value: function renderContent(content) {
      var scroll = this.props.scroll;
      return _react["default"].createElement(_DialogContent["default"], {
        classes: scroll === 'unset-paper' || scroll === 'unset-body' ? {
          root: this.props.classes.root
        } : undefined,
        style: this.props.contentStyle
      }, content);
    }
  }, {
    key: "renderText",
    value: function renderText(text) {
      var content = _react["default"].createElement(_DialogContentText["default"], {
        style: this.props.contentTextStyle
      }, text);

      return this.renderContent(content);
    }
  }, {
    key: "renderActions",
    value: function renderActions(actions) {
      return _react["default"].createElement(_DialogActions["default"], {
        style: this.props.actionsStyle
      }, actions);
    }
  }, {
    key: "renderPaperContent",
    value: function renderPaperContent() {
      var _this$props = this.props,
          actions = _this$props.actions,
          content = _this$props.content,
          text = _this$props.text,
          title = _this$props.title;
      return _react["default"].createElement(_react["default"].Fragment, null, title && this.renderTitle(title), text ? this.renderText(text) : this.renderContent(content), actions && this.renderActions(actions));
    }
  }, {
    key: "renderSnippet",
    value: function renderSnippet() {
      return _react["default"].createElement(Snippet, {
        style: this.props.snippetStyle
      }, _react["default"].createElement("div", null, this.renderPaperContent()), _react["default"].createElement(SnippetContent, {
        style: this.props.snippetContentStyle
      }, this.props.snippet));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          snippet = _this$props2.snippet,
          style = _this$props2.style,
          padding = _this$props2.padding,
          margin = _this$props2.margin,
          scroll = _this$props2.scroll,
          PaperProps = _this$props2.PaperProps,
          open = _this$props2.open,
          fullScreen = _this$props2.fullScreen,
          fullWidth = _this$props2.fullWidth,
          maxWidth = _this$props2.maxWidth,
          classes = _this$props2.classes,
          onClose = _this$props2.onClose;
      var scrollMode = scroll === 'unset-body' ? 'body' : scroll === 'unset-paper' ? 'paper' : scroll;
      return _react["default"].createElement(_Dialog["default"], {
        open: open,
        fullScreen: fullScreen,
        fullWidth: fullWidth,
        maxWidth: maxWidth,
        scroll: scrollMode,
        PaperProps: _objectSpread({
          classes: scroll === 'unset-body' || scroll === 'unset-paper' ? {
            root: classes.root
          } : undefined
        }, PaperProps),
        style: _objectSpread({
          padding: padding,
          margin: margin
        }, style),
        onClose: onClose
      }, snippet ? this.renderSnippet() : this.renderPaperContent());
    }
  }]);
  return Dialog;
}(_react.Component);

var _default = (0, _withStyles["default"])(styles)(Dialog);

exports["default"] = _default;