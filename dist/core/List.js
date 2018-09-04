"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@material-ui/core");
const react_1 = __importDefault(require("react"));
const List = ({ title, padding, margin, style = {}, children, className }) => react_1.default.createElement(core_1.List, { subheader: title
        ? react_1.default.createElement(core_1.ListSubheader, null, title)
        : undefined, className: className, style: Object.assign({ padding, margin }, style) }, children);
exports.default = List;
//# sourceMappingURL=List.js.map