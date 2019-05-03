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
const styles_1 = require("@material-ui/core/styles");
const react_1 = __importDefault(require("react"));
const styles = theme => ({
    default: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary
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
    }
});
const List = (_a) => {
    var { title, padding, margin, style = {}, children, className, classes, color = 'default' } = _a, otherProps = __rest(_a, ["title", "padding", "margin", "style", "children", "className", "classes", "color"]);
    return react_1.default.createElement(core_1.List, Object.assign({ subheader: title
            ? (react_1.default.createElement(core_1.ListSubheader, { className: classes[color] }, title))
            : undefined, className: `${classes[color]} ${className}`, style: Object.assign({ padding, margin }, style) }, otherProps), children);
};
exports.default = styles_1.withStyles(styles)(List);
//# sourceMappingURL=List.js.map