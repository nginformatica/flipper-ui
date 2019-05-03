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
    root: {
        backgroundColor: theme.palette.primary.main,
        boxShadow: theme.shadows[4],
        color: theme.palette.primary.contrastText
    },
    selected: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary
    }
});
class Tab extends react_1.Component {
    render() {
        const _a = this.props, { classes, style, margin, padding, selectedClass } = _a, otherProps = __rest(_a, ["classes", "style", "margin", "padding", "selectedClass"]);
        return (react_1.default.createElement(core_1.Tab, Object.assign({ classes: {
                root: classes.root,
                selected: `${classes.selected} ${selectedClass}`
            }, style: Object.assign({ margin, padding }, style) }, otherProps)));
    }
}
Tab.defaultProps = {
    disabled: false,
    margin: '0 4px'
};
exports.default = styles_1.withStyles(styles)(Tab);
//# sourceMappingURL=Tab.js.map