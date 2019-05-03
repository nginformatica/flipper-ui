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
const ExpansionPanel_1 = __importDefault(require("@material-ui/core/ExpansionPanel"));
const ExpansionPanelActions_1 = __importDefault(require("@material-ui/core/ExpansionPanelActions"));
const ExpansionPanelDetails_1 = __importDefault(require("@material-ui/core/ExpansionPanelDetails"));
const ExpansionPanelSummary_1 = __importDefault(require("@material-ui/core/ExpansionPanelSummary"));
const styles_1 = require("@material-ui/core/styles");
const react_1 = __importDefault(require("react"));
const styles = () => ({
    content: {
        marginLeft: '42px !important',
        marginTop: '0 !important',
        marginBottom: '0 !important'
    },
    expandIcon: {
        left: '8px',
        right: 'unset'
    }
});
const ExpansionPanel = (_a) => {
    var { actions, classes, details, expandIcon, iconPosition = 'left', margin, padding, style, summary, summaryStyle, detailsStyle, actionsStyle } = _a, otherProps = __rest(_a, ["actions", "classes", "details", "expandIcon", "iconPosition", "margin", "padding", "style", "summary", "summaryStyle", "detailsStyle", "actionsStyle"]);
    return react_1.default.createElement(ExpansionPanel_1.default, Object.assign({}, otherProps, { style: Object.assign({ margin, padding }, style) }),
        summary && (react_1.default.createElement(ExpansionPanelSummary_1.default, { expandIcon: expandIcon, classes: {
                content: iconPosition === 'left'
                    ? classes.content
                    : '',
                expandIcon: iconPosition === 'left'
                    ? classes.expandIcon
                    : ''
            }, style: summaryStyle }, summary)),
        details && (react_1.default.createElement(ExpansionPanelDetails_1.default, { style: detailsStyle }, details)),
        actions && (react_1.default.createElement(ExpansionPanelActions_1.default, { style: actionsStyle }, actions)));
};
exports.default = styles_1.withStyles(styles)(ExpansionPanel);
//# sourceMappingURL=ExpansionPanel.js.map