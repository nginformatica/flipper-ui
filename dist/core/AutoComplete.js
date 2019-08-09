"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _contains = _interopRequireDefault(require("ramda/es/contains"));

var _toLower = _interopRequireDefault(require("ramda/es/toLower"));

var _react = _interopRequireWildcard(require("react"));

var _Paper = _interopRequireDefault(require("./Paper"));

var _Fade = _interopRequireDefault(require("./Fade"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var AutoComplete = function AutoComplete(props) {
  var inputRef = (0, _react.useRef)(null);
  var index = props.suggestions.findIndex(function (suggestion) {
    if (props.value && (0, _typeof2["default"])(props.value) === 'object') {
      return props.value.value === suggestion.value;
    }

    return false;
  });

  var _useState = (0, _react.useState)(Math.max(0, index)),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      highlighted = _useState2[0],
      setHighlighted = _useState2[1];

  var _useState3 = (0, _react.useState)(Boolean(props.defaultIsOpen)),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      open = _useState4[0],
      setOpen = _useState4[1];

  (0, _react.useEffect)(function () {
    if (props.autoFocus) {
      if (inputRef.current) {
        inputRef.current.focus();

        if (props.openOnFocus) {
          setOpen(true);
        }
      }
    } else if (props.focusDelay) {
      setTimeout(function () {
        if (inputRef.current) {
          inputRef.current.focus();
        }

        if (props.openOnFocus) {
          setOpen(true);
        }
      }, props.focusDelay);
    }
  }, []);
  var inputValue = (0, _typeof2["default"])(props.value) === 'object' ? props.value.label : props.value || '';

  var handleSelect = function handleSelect(item) {
    if ((0, _typeof2["default"])(item) === 'object' && item.subheader) {
      return;
    }

    setOpen(false);
    props.onChange(item);
  };

  var getSuggestions = function getSuggestions() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : inputValue;

    if (props.openOnFocus && !value) {
      return props.suggestions;
    }

    var items = value ? props.suggestions : [];
    return items.filter(function (item) {
      if ((0, _typeof2["default"])(item) === 'object') {
        if (typeof props.value === 'string' && !item.subheader) {
          return props.caseSensitive ? (0, _contains["default"])(value, item.label) : (0, _contains["default"])((0, _toLower["default"])(value), (0, _toLower["default"])(item.label));
        }

        return true;
      }

      return props.caseSensitive ? (0, _contains["default"])(value, item) : (0, _contains["default"])((0, _toLower["default"])(value), (0, _toLower["default"])(item));
    });
  };

  var getPaperPosition = function getPaperPosition() {
    if (inputRef.current !== null) {
      var height = props.maxHeight || getSuggestions().length * 48;

      var _inputRef$current$get = inputRef.current.getBoundingClientRect(),
          top = _inputRef$current$get.top;

      if (top + height > window.innerHeight) {
        return 'above';
      }
    }

    return 'below';
  };

  var getItemProps = function getItemProps(item) {
    return {
      onClick: function onClick(event) {
        event.preventDefault();
        event.stopPropagation();
        handleSelect(item);
      }
    };
  };

  var handleFocus = function handleFocus(event) {
    if (props.openOnFocus) {
      setOpen(true);
    }

    if (props.selectTextOnFocus && event.target) {
      var input = event.target;

      if (input.select) {
        input.select();
      }
    }

    if (props.onFocus) {
      props.onFocus(event);
    }
  };

  var handleBlur = function handleBlur(event) {
    setTimeout(function () {
      return setOpen(false);
    }, 200);

    if (props.onBlur) {
      props.onBlur(event);
    }
  };

  var handleChange = function handleChange(event) {
    setHighlighted(0);
    props.onChange(event.target.value);

    if (getSuggestions(event.target.value).length > 0 || props.actions) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  var renderSuggestions = function renderSuggestions() {
    var paperStyle = {
      position: 'absolute',
      width: inputRef.current ? inputRef.current.offsetWidth : 256,
      bottom: getPaperPosition() === 'above' && inputRef.current ? inputRef.current.getBoundingClientRect().height + 1 : undefined,
      zIndex: 1099
    };
    return _react["default"].createElement(_Paper["default"], {
      square: true,
      style: paperStyle
    }, _react["default"].createElement("div", {
      style: {
        overflow: 'auto',
        maxHeight: props.maxHeight
      }
    }, getSuggestions().map(function (suggestion, index) {
      return _react["default"].createElement(_react.Fragment, {
        key: index
      }, props.renderSuggestion(suggestion, getItemProps(suggestion), highlighted === index));
    })), props.actions);
  };

  var renderPaper = function renderPaper() {
    return props.fade ? _react["default"].createElement(_Fade["default"], {
      "in": open
    }, renderSuggestions()) : renderSuggestions();
  };

  var handleNavigate = function handleNavigate(event) {
    if (event.key === 'ArrowDown' && highlighted < getSuggestions().length - 1) {
      setHighlighted(highlighted + 1);
    } else if (event.key === 'ArrowUp' && highlighted > 0) {
      setHighlighted(highlighted - 1);
    } else if (event.key === 'Escape') {
      setOpen(false);
    } else if (event.key === 'Enter') {
      var item = getSuggestions()[highlighted];
      handleSelect(item);
    }
  };

  return _react["default"].createElement("div", {
    style: _objectSpread({
      position: 'relative'
    }, props.style)
  }, props.renderInput({
    value: inputValue,
    inputProps: {
      ref: inputRef
    },
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onKeyDown: handleNavigate
  }), open && renderPaper());
};

var _default = AutoComplete;
exports["default"] = _default;