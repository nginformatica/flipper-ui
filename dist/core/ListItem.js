"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@material-ui/core");
const styles_1 = require("@material-ui/core/styles");
const react_1 = __importStar(require("react"));
const Typography_1 = __importDefault(require("./Typography"));
const styles = () => ({
    default: {
        color: 'inherit'
    }
});
class ListItem extends react_1.Component {
    renderChildren() {
        return (typeof this.props.children === 'string'
            ? (react_1.default.createElement(Typography_1.default, null, this.props.children))
            : this.props.children);
    }
    renderCustomItem() {
        const { action, avatar, icon, title, subtitle, classes } = this.props;
        const minWidth = title || subtitle ? '42px' : '0px';
        const className = classes.default;
        return (react_1.default.createElement(react_1.Fragment, null,
            avatar && (react_1.default.createElement(core_1.ListItemAvatar, null, avatar)),
            icon && (react_1.default.createElement(core_1.ListItemIcon, { className: className, style: { minWidth } }, icon)),
            (title || subtitle) && (react_1.default.createElement(core_1.ListItemText, { primaryTypographyProps: { className }, secondaryTypographyProps: { className }, primary: title, secondary: subtitle, style: action ? { marginRight: '36px' } : {} })),
            action && (react_1.default.createElement(core_1.ListItemSecondaryAction, { className: className }, action))));
    }
    render() {
        const { id, className, children, value, style = {}, padding, margin, selected, disabled, onClick } = this.props;
        return children
            ? (react_1.default.createElement(core_1.MenuItem, { button: true, id: id, style: Object.assign({ padding, margin }, style), className: className, selected: selected, disabled: disabled, value: value, onClick: onClick }, this.renderChildren()))
            : (react_1.default.createElement(core_1.ListItem, { button: true, id: id, style: Object.assign({ padding, margin }, style), className: className, selected: selected, disabled: disabled, onClick: onClick }, this.renderCustomItem()));
    }
}
exports.default = styles_1.withStyles(styles)(ListItem);
//# sourceMappingURL=ListItem.js.map