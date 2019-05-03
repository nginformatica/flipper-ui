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
const TableBody_1 = __importDefault(require("@material-ui/core/TableBody"));
const react_1 = __importDefault(require("react"));
const TableBody = (_a) => {
    var { style, margin, padding, children } = _a, otherProps = __rest(_a, ["style", "margin", "padding", "children"]);
    return react_1.default.createElement(TableBody_1.default, Object.assign({}, otherProps, { style: Object.assign({ padding, margin }, style) }), children);
};
exports.default = TableBody;
//# sourceMappingURL=TableBody.js.map