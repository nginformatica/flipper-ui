"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const pickers_1 = require("@material-ui/pickers");
const date_fns_1 = __importDefault(require("@date-io/date-fns"));
const pt_BR_1 = __importDefault(require("date-fns/locale/pt-BR"));
const es_1 = __importDefault(require("date-fns/locale/es"));
const en_US_1 = __importDefault(require("date-fns/locale/en-US"));
const TextField_1 = require("./TextField");
const styles_1 = require("@material-ui/styles");
const LOCALES = {
    'es': es_1.default,
    'pt-BR': pt_BR_1.default,
    'en-US': en_US_1.default
};
const DEFAULT_FORMATS = {
    date: 'dd/MM/yyyy',
    time: 'HH:mm',
    datetime: 'dd/MM/yyyy HH:mm'
};
const DateTime = (_a) => {
    var { padding, margin, style, format, variant = 'inline', inputVariant = 'outlined', classes, ampm = false, invalidDateMessage = '', minDateMessage = '', maxDateMessage = '', locale = 'pt-BR', type = 'date' } = _a, otherProps = __rest(_a, ["padding", "margin", "style", "format", "variant", "inputVariant", "classes", "ampm", "invalidDateMessage", "minDateMessage", "maxDateMessage", "locale", "type"]);
    const fieldProps = Object.assign({}, otherProps, { format: format ? format : DEFAULT_FORMATS[type], variant,
        inputVariant,
        ampm,
        invalidDateMessage,
        minDateMessage,
        maxDateMessage, style: Object.assign({ margin, padding }, style), inputProps: Object.assign({ autocomplete: 'off' }, otherProps.inputProps), InputAdornmentProps: Object.assign({ style: { width: '32px' } }, otherProps.InputAdornmentProps), InputLabelProps: Object.assign({ classes: {
                outlined: inputVariant === 'outlined'
                    ? classes.outlinedLabel
                    : ''
            } }, otherProps.InputLabelProps), InputProps: Object.assign({ classes: {
                input: inputVariant === 'outlined'
                    ? classes.outlinedInput
                    : '',
                multiline: inputVariant === 'outlined'
                    ? classes.outlinedMultiline
                    : ''
            } }, otherProps.InputProps) });
    const renderDatePicker = () => react_1.default.createElement(pickers_1.KeyboardDatePicker, Object.assign({}, fieldProps));
    const renderTimePicker = () => react_1.default.createElement(pickers_1.KeyboardTimePicker, Object.assign({}, fieldProps));
    const renderDateTimePicker = () => react_1.default.createElement(pickers_1.KeyboardDateTimePicker, Object.assign({}, fieldProps));
    return (react_1.default.createElement(pickers_1.MuiPickersUtilsProvider, { utils: date_fns_1.default, locale: LOCALES[locale] },
        type === 'date' && renderDatePicker(),
        type === 'time' && renderTimePicker(),
        type === 'datetime' && renderDateTimePicker()));
};
exports.default = styles_1.withStyles(TextField_1.styles)(DateTime);
//# sourceMappingURL=DateTime.js.map