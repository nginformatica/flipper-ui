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
const core_2 = require("@material-ui/core");
const ramda_1 = require("ramda");
const react_1 = __importDefault(require("react"));
const colors_1 = require("../colors");
const styles = theme => core_1.createStyles({
    input: {
        '&:focus': {
            borderColor: theme.palette.primary.light,
            boxShadow: `0 0 0 0.2rem ${theme.palette.primary.light}D9`,
        },
        'backgroundColor': theme.palette.common.white,
        'border': `1px solid ${colors_1.background.dark}`,
        'borderRadius': 4,
        'fontSize': 16,
        'padding': '10px 12px',
        'transition': theme.transitions.create(['border-color', 'box-shadow']),
        'width': 'calc(100% - 24px)'
    },
    inputError: {
        '&:focus': {
            borderColor: colors_1.error.normal,
            boxShadow: `0 0 0 0.2rem ${colors_1.error.light}D9`,
        },
        'backgroundColor': theme.palette.common.white,
        'border': `1px solid ${colors_1.error.dark}`,
        'borderRadius': 4,
        'fontSize': 16,
        'padding': '10px 12px',
        'transition': theme.transitions.create(['border-color', 'box-shadow']),
        'width': 'calc(100% - 24px)'
    },
    label: {
        fontSize: 18
    },
    root: {
        'label + &': {
            marginTop: theme.spacing.unit * 3,
        },
        'padding': 0
    }
});
const TextField = (_a) => {
    var { classes, margin, padding, style = {}, InputProps, InputLabelProps, error, noBorder = false } = _a, otherProps = __rest(_a, ["classes", "margin", "padding", "style", "InputProps", "InputLabelProps", "error", "noBorder"]);
    return react_1.default.createElement(core_2.TextField, Object.assign({ error: error, style: Object.assign({ margin, padding }, style) }, otherProps, { InputProps: ramda_1.merge(noBorder
            ? {}
            : {
                classes: {
                    input: error ? classes.inputError : classes.input,
                    root: classes.root
                },
                disableUnderline: true
            }, InputProps), InputLabelProps: ramda_1.merge(noBorder
            ? {}
            : {
                className: classes.label,
                shrink: true
            }, InputLabelProps) }));
};
exports.default = core_1.withStyles(styles)(TextField);
//# sourceMappingURL=TextField.js.map