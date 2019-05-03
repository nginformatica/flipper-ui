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
const styles_1 = require("@material-ui/core/styles");
const react_1 = __importStar(require("react"));
const styles = () => ({
    default: {
        color: 'inherit'
    }
});
class ListItem extends react_1.Component {
    renderCustomItem() {
        const { action, avatar, icon, title, subtitle, classes } = this.props;
        const iconMargin = title || subtitle ? '16px' : '0px';
        const className = classes.default;
        return (react_1.default.createElement(react_1.Fragment, null,
            avatar && (react_1.default.createElement(core_1.ListItemAvatar, null, avatar)),
            icon && (react_1.default.createElement(core_1.ListItemIcon, { className: className, style: { marginRight: iconMargin } }, icon)),
            (title || subtitle) && (react_1.default.createElement(core_1.ListItemText, { primaryTypographyProps: { className }, secondaryTypographyProps: { className }, primary: title, secondary: subtitle })),
            action && (react_1.default.createElement(core_1.ListItemSecondaryAction, { className: className }, action))));
    }
    render() {
        const { id, className, children, value, style = {}, padding, margin, name, selected, onClick } = this.props;
        return (react_1.default.createElement(core_1.ListItem, { button: true, value: value, name: name, id: id, style: Object.assign({ padding, margin }, style), className: className, selected: selected, onClick: onClick }, children ? children : this.renderCustomItem()));
    }
}
exports.default = styles_1.withStyles(styles)(ListItem);
//# sourceMappingURL=ListItem.js.map