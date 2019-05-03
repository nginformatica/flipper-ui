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
const styles_1 = require("@material-ui/core/styles");
const TableHead_1 = __importDefault(require("@material-ui/core/TableHead"));
const react_1 = __importDefault(require("react"));
const styles = theme => ({
    default: {
        color: theme.palette.background.default
    },
    inherit: {
        color: 'inherit'
    },
    primary: {
        color: theme.palette.primary.main
    },
    secondary: {
        color: theme.palette.secondary.main
    }
});
const TableHead = (_a) => {
    var { style, margin, padding, children, color, classes } = _a, otherProps = __rest(_a, ["style", "margin", "padding", "children", "color", "classes"]);
    return react_1.default.createElement(TableHead_1.default, Object.assign({}, otherProps, { style: Object.assign({ padding, margin }, style), classes: color
            ? {
                root: classes[color]
            }
            : {} }), children);
};
exports.default = styles_1.withStyles(styles)(TableHead);
//# sourceMappingURL=TableHead.js.map