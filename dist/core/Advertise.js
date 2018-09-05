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
const colors_1 = require("../colors");
const Paper_1 = __importDefault(require("./Paper"));
const Typography_1 = __importDefault(require("./Typography"));
const styles = {
    border: {
        borderLeft: `1px solid ${colors_1.background.dark}`
    }
};
const Advertise = (_a) => {
    var { comment, author, padding = 12, commentStyle = {}, authorStyle = {} } = _a, otherProps = __rest(_a, ["comment", "author", "padding", "commentStyle", "authorStyle"]);
    return react_1.default.createElement(Paper_1.default, Object.assign({ padding: padding }, otherProps),
        react_1.default.createElement(Typography_1.default, { margin: '12px 12px 0px', padding: '6px 24px', style: Object.assign({}, styles.border, commentStyle) }, comment),
        react_1.default.createElement(Typography_1.default, { margin: '0px 12px 12px', padding: '6px 24px', variant: 'caption', style: Object.assign({}, styles.border, authorStyle) }, author));
};
exports.default = Advertise;
//# sourceMappingURL=Advertise.js.map