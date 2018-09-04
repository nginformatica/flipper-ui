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
class Checkbox extends react_1.Component {
    renderCheckbox() {
        return (react_1.default.createElement(core_1.Checkbox, { checked: this.props.checked, value: this.props.name, color: this.props.color, disabled: this.props.disabled, onChange: this.props.onChange }));
    }
    renderSwitch() {
        return (react_1.default.createElement(core_1.Switch, { checked: this.props.checked, value: this.props.name, color: this.props.color, disabled: this.props.disabled, onChange: this.props.onChange }));
    }
    renderControl() {
        return this.props.type === 'checkbox'
            ? this.renderCheckbox()
            : this.renderSwitch();
    }
    render() {
        const { label, style = {}, padding, margin, className } = this.props;
        return label
            ? (react_1.default.createElement(core_1.FormControlLabel, { style: Object.assign({ padding, margin }, style), className: className, label: label, control: this.renderControl() }))
            : this.renderControl();
    }
}
Checkbox.defaultProps = {
    type: 'checkbox'
};
exports.default = Checkbox;
//# sourceMappingURL=Checkbox.js.map