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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@material-ui/core");
const react_1 = __importStar(require("react"));
const isActive = (index, active) => active !== undefined
    ? active >= index
    : undefined;
class Stepper extends react_1.Component {
    render() {
        const _a = this.props, { active, bottomLabel, steps, padding, margin, style = {} } = _a, otherProps = __rest(_a, ["active", "bottomLabel", "steps", "padding", "margin", "style"]);
        return (react_1.default.createElement(core_1.Stepper, Object.assign({ alternativeLabel: bottomLabel, activeStep: active, style: Object.assign({ padding, margin }, style) }, otherProps), steps.map((step, index) => react_1.default.createElement(core_1.Step, { key: index },
            react_1.default.createElement(core_1.StepLabel, { icon: typeof step === 'object'
                    ? typeof step.icon === 'function'
                        ? step.icon(isActive(index, active))
                        : react_1.default.cloneElement(step.icon, {
                            active: isActive(index, active),
                            color: isActive(index, active)
                                ? 'primary'
                                : 'default'
                        })
                    : index + 1 }, typeof step === 'object' ? step.label : step)))));
    }
}
Stepper.defaultProps = { active: 0 };
exports.default = Stepper;
//# sourceMappingURL=Stepper.js.map