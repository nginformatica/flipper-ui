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
const Card_1 = __importDefault(require("@material-ui/core/Card"));
const CardActionArea_1 = __importDefault(require("@material-ui/core/CardActionArea"));
const CardActions_1 = __importDefault(require("@material-ui/core/CardActions"));
const CardContent_1 = __importDefault(require("@material-ui/core/CardContent"));
const CardMedia_1 = __importDefault(require("@material-ui/core/CardMedia"));
const CardHeader_1 = __importDefault(require("@material-ui/core/CardHeader"));
exports.CardActionArea = (_a) => {
    var { margin, padding, style } = _a, otherProps = __rest(_a, ["margin", "padding", "style"]);
    return react_1.default.createElement(CardActionArea_1.default, Object.assign({}, otherProps, { style: Object.assign({ padding, margin }, style) }), otherProps.children);
};
exports.CardActions = (_a) => {
    var { margin, padding, style } = _a, otherProps = __rest(_a, ["margin", "padding", "style"]);
    return react_1.default.createElement(CardActions_1.default, Object.assign({}, otherProps, { style: Object.assign({ padding, margin }, style) }), otherProps.children);
};
exports.CardContent = (_a) => {
    var { margin, padding, style } = _a, otherProps = __rest(_a, ["margin", "padding", "style"]);
    return react_1.default.createElement(CardContent_1.default, Object.assign({}, otherProps, { style: Object.assign({ padding, margin }, style) }), otherProps.children);
};
exports.CardMedia = (_a) => {
    var { margin, padding, style } = _a, otherProps = __rest(_a, ["margin", "padding", "style"]);
    return react_1.default.createElement(CardMedia_1.default, Object.assign({}, otherProps, { style: Object.assign({ padding, margin }, style) }), otherProps.children);
};
exports.CardHeader = (_a) => {
    var { margin, padding, style } = _a, otherProps = __rest(_a, ["margin", "padding", "style"]);
    return react_1.default.createElement(CardHeader_1.default, Object.assign({}, otherProps, { style: Object.assign({ padding, margin }, style) }), otherProps.children);
};
const Card = (_a) => {
    var { margin, padding, style } = _a, otherProps = __rest(_a, ["margin", "padding", "style"]);
    return react_1.default.createElement(Card_1.default, Object.assign({}, otherProps, { style: Object.assign({ padding, margin }, style) }), otherProps.children);
};
exports.default = Card;
//# sourceMappingURL=Card.js.map