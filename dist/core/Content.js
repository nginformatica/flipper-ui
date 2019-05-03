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
const styled_components_1 = __importDefault(require("styled-components"));
const StyledContent = styled_components_1.default.main `
    flex: 1;
    transition: all 500ms ease;
`;
const Content = (_a) => {
    var { children, padding, margin, style = {}, ref } = _a, otherProps = __rest(_a, ["children", "padding", "margin", "style", "ref"]);
    return react_1.default.createElement(StyledContent, Object.assign({}, otherProps, { style: Object.assign({ padding, margin }, style) }), children);
};
exports.default = Content;
//# sourceMappingURL=Content.js.map