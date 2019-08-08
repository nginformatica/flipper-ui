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
const colors_1 = require("../colors");
const StyledLine = styled_components_1.default.hr `
    flex: 1;
    border: 1px solid ${props => props.primary
    ? colors_1.primary.normal
    : colors_1.background.normal};
`;
const Line = (_a) => {
    var { padding, margin, style } = _a, otherProps = __rest(_a, ["padding", "margin", "style"]);
    return react_1.default.createElement(StyledLine, Object.assign({ style: Object.assign({ padding, margin }, style) }, otherProps));
};
exports.default = Line;
//# sourceMappingURL=Line.js.map