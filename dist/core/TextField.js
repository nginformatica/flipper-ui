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
const core_1 = require("@material-ui/core");
const react_1 = __importDefault(require("react"));
exports.styles = () => ({
    input: {
        fontSize: '14px',
        padding: '10px',
        height: 'auto'
    },
    outlinedInput: {
        fontSize: '14px',
        padding: '10px',
        height: 'auto'
    },
    outlinedLabel: {
        fontSize: '14px',
        transform: 'translate(14px, 13px) scale(1)'
    },
    outlinedMultiline: {
        padding: '0px'
    }
});
const TextField = (_a) => {
    var { margin, padding, style = {}, error, variant = 'outlined', InputLabelProps = {}, InputProps = {}, classes, autoComplete = 'off' } = _a, otherProps = __rest(_a, ["margin", "padding", "style", "error", "variant", "InputLabelProps", "InputProps", "classes", "autoComplete"]);
    return react_1.default.createElement(core_1.TextField, Object.assign({ autoComplete: autoComplete, error: error, variant: variant, style: Object.assign({ margin,
            padding }, style), InputLabelProps: Object.assign({ classes: {
                outlined: variant === 'outlined' ? classes.outlinedLabel : ''
            } }, InputLabelProps), InputProps: Object.assign({ classes: {
                input: variant === 'outlined' ? classes.outlinedInput : '',
                multiline: variant === 'outlined' ? classes.outlinedMultiline : ''
            } }, InputProps) }, otherProps));
};
exports.default = core_1.withStyles(exports.styles)(TextField);
//# sourceMappingURL=TextField.js.map