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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@material-ui/core");
const styles_1 = require("@material-ui/core/styles");
const react_1 = __importStar(require("react"));
const styles = theme => ({
    default: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary
    },
    indicator: {
        height: 0,
        opacity: 0,
        width: 0
    },
    inherit: {
        backgroundColor: 'inherit',
        color: 'inherit'
    },
    primary: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.contrastText
    },
    secondary: {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.secondary.contrastText
    }
});
class Tabs extends react_1.Component {
    render() {
        const _a = this.props, { children, color = 'primary', className, classes, style, padding, margin } = _a, otherProps = __rest(_a, ["children", "color", "className", "classes", "style", "padding", "margin"]);
        return (react_1.default.createElement(core_1.Tabs, Object.assign({}, otherProps, { style: Object.assign({ padding, margin }, style), className: `${classes[color]} ${className}`, classes: { indicator: classes.indicator } }), children));
    }
}
Tabs.defaultProps = {
    centered: true,
    fullWidth: false,
    padding: '6px 0 0',
    scrollable: false
};
exports.default = styles_1.withStyles(styles)(Tabs);
//# sourceMappingURL=Tabs.js.map