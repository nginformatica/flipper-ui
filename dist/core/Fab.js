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
const Fab = (_a) => {
    var { children, margin, padding, style = {}, variant } = _a, otherProps = __rest(_a, ["children", "margin", "padding", "style", "variant"]);
    return react_1.default.createElement(core_1.Fab, Object.assign({}, otherProps, { variant: variant, style: Object.assign({ margin, padding }, style) }), children);
};
exports.default = Fab;
//# sourceMappingURL=Fab.js.map