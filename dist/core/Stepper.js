"use strict";
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
class Stepper extends react_1.Component {
    render() {
        const { active, bottomLabel, steps, padding, margin, style = {}, className } = this.props;
        return (react_1.default.createElement(core_1.Stepper, { alternativeLabel: bottomLabel, activeStep: active, style: Object.assign({ padding, margin }, style), className: className }, steps.map((step, index) => react_1.default.createElement(core_1.Step, { key: index },
            react_1.default.createElement(core_1.StepLabel, null, step)))));
    }
}
Stepper.defaultProps = { active: 0 };
exports.default = Stepper;
//# sourceMappingURL=Stepper.js.map