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
class ListItem extends react_1.Component {
    renderCustomItem() {
        const { action, icon, title, subtitle, iconOnly } = this.props;
        return (react_1.default.createElement(react_1.Fragment, null,
            icon && (react_1.default.createElement(core_1.ListItemIcon, null, icon)),
            !iconOnly && (react_1.default.createElement(core_1.ListItemText, { primary: title, secondary: subtitle })),
            !iconOnly && action && (react_1.default.createElement(core_1.ListItemSecondaryAction, null, action))));
    }
    render() {
        const { className, children, value, style, onClick } = this.props;
        return (react_1.default.createElement(core_1.ListItem, { button: true, value: value, style: style, className: className, onClick: () => onClick(name) }, children ? children : this.renderCustomItem()));
    }
}
exports.default = ListItem;
//# sourceMappingURL=ListItem.js.map