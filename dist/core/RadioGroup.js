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
const RadioGroup = (_a) => {
    var { options = [], className, padding, margin, style = {}, title, value, onChange } = _a, otherProps = __rest(_a, ["options", "className", "padding", "margin", "style", "title", "value", "onChange"]);
    return react_1.default.createElement(core_1.FormControl, Object.assign({ className: className, style: Object.assign({ padding, margin }, style) }, otherProps),
        react_1.default.createElement(core_1.FormLabel, { component: 'legend' }, title),
        react_1.default.createElement(core_1.RadioGroup, { name: name, value: value, onChange: onChange }, options.map(option => react_1.default.createElement(core_1.FormControlLabel, { key: option.value, label: option.label, value: option.value, control: react_1.default.createElement(core_1.Radio, null) }))));
};
exports.default = RadioGroup;
//# sourceMappingURL=RadioGroup.js.map