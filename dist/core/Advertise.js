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
const Paper_1 = __importDefault(require("./Paper"));
const Typography_1 = __importDefault(require("./Typography"));
const Advertise = (_a) => {
    var { comment, author, padding = 16, commentStyle, authorStyle } = _a, otherProps = __rest(_a, ["comment", "author", "padding", "commentStyle", "authorStyle"]);
    return react_1.default.createElement(Paper_1.default, Object.assign({ padding: padding }, otherProps),
        react_1.default.createElement(Typography_1.default, { margin: 12, style: commentStyle }, comment),
        react_1.default.createElement(Typography_1.default, { margin: 12, variant: 'caption', style: authorStyle }, `- ${author}`));
};
exports.default = Advertise;
//# sourceMappingURL=Advertise.js.map