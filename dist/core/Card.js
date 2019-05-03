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
const ramda_1 = require("ramda");
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const colors_1 = require("../colors");
// __ from ramda was not recognized by TS
const getPercent = ramda_1.pipe(ramda_1.prop('xs'), ramda_1.multiply(100), num => ramda_1.divide(num, 12));
const Container = styled_components_1.default.div `
    width: calc(${getPercent}% - 24px);
    background: ${colors_1.primary.normal};
    font-family: 'Roboto', sans-serif;
    display: block;
    border-radius: 12px;
    margin: 12px;
`;
const Header = styled_components_1.default.div `
    border-radius: 12px;
    color: ${colors_1.white};
    padding: 0.75em;
`;
const Content = styled_components_1.default.div `
    background: ${colors_1.white};
    border-radius: 12px;
    min-height: 52px;
    padding: 12px;
    border: 1px solid ${colors_1.primary.normal};
`;
const Card = (_a) => {
    var { children, padding, margin, style = {}, title, ref, xs = 12 } = _a, otherProps = __rest(_a, ["children", "padding", "margin", "style", "title", "ref", "xs"]);
    return react_1.default.createElement(Container, Object.assign({ xs: xs, style: Object.assign({ padding, margin }, style) }, otherProps),
        react_1.default.createElement(Header, null, title),
        react_1.default.createElement(Content, null, children));
};
exports.default = Card;
//# sourceMappingURL=Card.js.map