"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("@material-ui/core/styles");
const react_1 = __importDefault(require("react"));
const ThemeProvider = ({ options = {}, children }) => react_1.default.createElement(styles_1.MuiThemeProvider, { theme: styles_1.createMuiTheme(options) }, children);
exports.default = ThemeProvider;
//# sourceMappingURL=ThemeProvider.js.map