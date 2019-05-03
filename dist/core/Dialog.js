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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Dialog_1 = __importDefault(require("@material-ui/core/Dialog"));
const DialogActions_1 = __importDefault(require("@material-ui/core/DialogActions"));
const DialogContent_1 = __importDefault(require("@material-ui/core/DialogContent"));
const DialogContentText_1 = __importDefault(require("@material-ui/core/DialogContentText"));
const DialogTitle_1 = __importDefault(require("@material-ui/core/DialogTitle"));
const react_1 = __importStar(require("react"));
class Dialog extends react_1.Component {
    renderTitle(title) {
        return (react_1.default.createElement(DialogTitle_1.default, { style: this.props.titleStyle }, title));
    }
    renderContent(content) {
        return (react_1.default.createElement(DialogContent_1.default, { style: this.props.contentStyle }, content));
    }
    renderText(text) {
        const content = (react_1.default.createElement(DialogContentText_1.default, { style: this.props.contentTextStyle }, text));
        return this.renderContent(content);
    }
    renderActions(actions) {
        return (react_1.default.createElement(DialogActions_1.default, { style: this.props.actionsStyle }, actions));
    }
    render() {
        const _a = this.props, { actions, content, text, title, style, padding, margin } = _a, otherProps = __rest(_a, ["actions", "content", "text", "title", "style", "padding", "margin"]);
        return (react_1.default.createElement(Dialog_1.default, Object.assign({}, otherProps, { style: Object.assign({ padding, margin }, style) }),
            title && this.renderTitle(title),
            text ? this.renderText(text) : this.renderContent(content),
            actions && this.renderActions(actions)));
    }
}
exports.default = Dialog;
//# sourceMappingURL=Dialog.js.map