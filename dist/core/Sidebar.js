"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Drawer_1 = __importDefault(require("@material-ui/core/Drawer"));
const styles_1 = require("@material-ui/core/styles");
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const icons_1 = require("../icons");
const Button_1 = __importDefault(require("./Button"));
const styles = theme => ({
    button: {
        '&:active': {
            boxShadow: 'none'
        },
        'alignSelf': 'right',
        'backgroundColor': 'transparent',
        'boxShadow': 'none',
        'maxWidth': 'inherit',
        'minWidth': 'auto',
        'width': '100%'
    },
    default: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.background.contrastText
    },
    icon: {
        fontSize: '24px'
    },
    inherit: {
        backgroundColor: 'inherit',
        color: 'inherit'
    },
    primary: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
    },
    secondary: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText
    },
    sidebar: {
        bottom: '0px',
        left: '0px',
        position: 'fixed',
        top: 'inherit',
        width: 'inherit'
    }
});
const Action = styled_components_1.default.div `
    flex-direction: ${props => props.anchor === 'left'
    ? 'row-reverse'
    : 'row'};
    display: flex;
    padding: 4px;
`;
class Sidebar extends react_1.Component {
    renderAction() {
        const { expanded = true, anchor = 'left', color = 'default', minWidth = 72, ButtonProps, classes } = this.props;
        const iconToLeft = (anchor === 'left' && expanded)
            || (anchor === 'right' && !expanded);
        return (react_1.default.createElement(Action, { anchor: anchor },
            react_1.default.createElement(Button_1.default, Object.assign({ name: `button-${name || 'sidebar'}`, color: color, variant: 'contained', className: classes.button, style: { maxWidth: minWidth }, onClick: this.props.onToggle }, ButtonProps), iconToLeft
                ? react_1.default.createElement(icons_1.KeyboardArrowLeft, { className: classes.icon })
                : react_1.default.createElement(icons_1.KeyboardArrowRight, { className: classes.icon }))));
    }
    render() {
        const { id, anchor = 'left', className, classes, color = 'default', docked = false, expanded = true, margin, maxWidth = 220, minWidth = 72, top = 64, open, padding, paperClasses, showButton = true, style, variant = 'permanent' } = this.props;
        const width = expanded ? maxWidth : minWidth;
        return (react_1.default.createElement(Drawer_1.default, { id: id, open: open, anchor: anchor, variant: variant, className: className, style: Object.assign({ width, padding, margin, top }, style), PaperProps: {
                className: `${docked ? classes.sidebar : ''} ${classes[color]}`,
                classes: paperClasses
            } },
            showButton && this.renderAction(),
            this.props.children));
    }
}
exports.default = styles_1.withStyles(styles)(Sidebar);
//# sourceMappingURL=Sidebar.js.map