"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@material-ui/core");
const react_1 = __importDefault(require("react"));
const RadioGroup = ({ options = [], className, padding, margin, style = {}, title, value, onChange }) => react_1.default.createElement(core_1.FormControl, { className: className, style: Object.assign({ padding, margin }, style) },
    react_1.default.createElement(core_1.FormLabel, { component: 'legend' }, title),
    react_1.default.createElement(core_1.RadioGroup, { name: name, value: value, onChange: onChange }, options.map(option => react_1.default.createElement(core_1.FormControlLabel, { key: option.value, label: option.label, value: option.value, control: react_1.default.createElement(core_1.Radio, null) }))));
exports.default = RadioGroup;
//# sourceMappingURL=RadioGroup.js.map