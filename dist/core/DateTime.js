"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _pickers = require("@material-ui/pickers");

var _dateFns = _interopRequireDefault(require("@date-io/date-fns"));

var _ptBR = _interopRequireDefault(require("date-fns/locale/pt-BR"));

var _es = _interopRequireDefault(require("date-fns/locale/es"));

var _enUS = _interopRequireDefault(require("date-fns/locale/en-US"));

var _TextField = require("./TextField");

var _withStyles = _interopRequireDefault(require("@material-ui/styles/withStyles"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var LOCALES = {
  'es': _es["default"],
  'pt-BR': _ptBR["default"],
  'en-US': _enUS["default"]
};
var DEFAULT_FORMATS = {
  date: 'dd/MM/yyyy',
  time: 'HH:mm',
  datetime: 'dd/MM/yyyy HH:mm'
};

var DateTime = function DateTime(_ref) {
  var padding = _ref.padding,
      margin = _ref.margin,
      style = _ref.style,
      format = _ref.format,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'inline' : _ref$variant,
      _ref$inputVariant = _ref.inputVariant,
      inputVariant = _ref$inputVariant === void 0 ? 'outlined' : _ref$inputVariant,
      classes = _ref.classes,
      _ref$ampm = _ref.ampm,
      ampm = _ref$ampm === void 0 ? false : _ref$ampm,
      _ref$invalidDateMessa = _ref.invalidDateMessage,
      invalidDateMessage = _ref$invalidDateMessa === void 0 ? '' : _ref$invalidDateMessa,
      _ref$minDateMessage = _ref.minDateMessage,
      minDateMessage = _ref$minDateMessage === void 0 ? '' : _ref$minDateMessage,
      _ref$maxDateMessage = _ref.maxDateMessage,
      maxDateMessage = _ref$maxDateMessage === void 0 ? '' : _ref$maxDateMessage,
      _ref$locale = _ref.locale,
      locale = _ref$locale === void 0 ? 'pt-BR' : _ref$locale,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'date' : _ref$type,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["padding", "margin", "style", "format", "variant", "inputVariant", "classes", "ampm", "invalidDateMessage", "minDateMessage", "maxDateMessage", "locale", "type"]);

  var fieldProps = _objectSpread({}, otherProps, {
    format: format ? format : DEFAULT_FORMATS[type],
    variant: variant,
    inputVariant: inputVariant,
    ampm: ampm,
    invalidDateMessage: invalidDateMessage,
    minDateMessage: minDateMessage,
    maxDateMessage: maxDateMessage,
    style: _objectSpread({
      margin: margin,
      padding: padding
    }, style),
    inputProps: _objectSpread({
      autocomplete: 'off'
    }, otherProps.inputProps),
    InputAdornmentProps: _objectSpread({
      style: {
        width: '32px'
      }
    }, otherProps.InputAdornmentProps),
    InputLabelProps: _objectSpread({
      classes: {
        outlined: inputVariant === 'outlined' ? classes.outlinedLabel : ''
      }
    }, otherProps.InputLabelProps),
    InputProps: _objectSpread({
      classes: {
        input: inputVariant === 'outlined' ? classes.outlinedInput : '',
        multiline: inputVariant === 'outlined' ? classes.outlinedMultiline : ''
      }
    }, otherProps.InputProps)
  });

  var renderDatePicker = function renderDatePicker() {
    return _react["default"].createElement(_pickers.KeyboardDatePicker, fieldProps);
  };

  var renderTimePicker = function renderTimePicker() {
    return _react["default"].createElement(_pickers.KeyboardTimePicker, fieldProps);
  };

  var renderDateTimePicker = function renderDateTimePicker() {
    return _react["default"].createElement(_pickers.KeyboardDateTimePicker, fieldProps);
  };

  return _react["default"].createElement(_pickers.MuiPickersUtilsProvider, {
    utils: _dateFns["default"],
    locale: LOCALES[locale]
  }, type === 'date' && renderDatePicker(), type === 'time' && renderTimePicker(), type === 'datetime' && renderDateTimePicker());
};

var _default = (0, _withStyles["default"])(_TextField.styles)(DateTime);

exports["default"] = _default;