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
const colors_1 = require("@material-ui/core/colors");
const styles_1 = require("@material-ui/core/styles");
const icons_1 = require("@material-ui/icons");
const react_1 = __importDefault(require("react"));
const variants = {
    error: {
        color: colors_1.red[700],
        icon: icons_1.Error
    },
    info: {
        color: colors_1.blue[500],
        icon: icons_1.Info
    },
    success: {
        color: colors_1.green[700],
        icon: icons_1.CheckCircle
    },
    warning: {
        color: colors_1.amber[700],
        icon: icons_1.Warning
    }
};
const styles = theme => ({
    icon: {
        fontSize: 20,
        marginRight: theme.spacing.unit,
        opacity: 0.9
    },
    message: {
        alignItems: 'center',
        display: 'flex'
    }
});
const SnackBar = (props) => {
    const { anchorOrigin, autoHide = 6000, classes, message, onClose, open, padding, margin, style, variant = 'info', className } = props, other = __rest(props, ["anchorOrigin", "autoHide", "classes", "message", "onClose", "open", "padding", "margin", "style", "variant", "className"]);
    const Icon = variants[variant].icon;
    return (react_1.default.createElement(core_1.Snackbar, { anchorOrigin: anchorOrigin, open: open, autoHideDuration: 6000, style: Object.assign({ padding, margin }, style), className: className, onClose: onClose },
        react_1.default.createElement(core_1.SnackbarContent, Object.assign({ style: { backgroundColor: variants[variant].color }, "aria-describedby": 'client-snackbar', message: react_1.default.createElement("span", { id: 'client-snackbar', className: classes.message },
                react_1.default.createElement(Icon, { className: classes.icon }),
                message), action: [
                react_1.default.createElement(core_1.IconButton, { key: 'close', "aria-label": 'Close', color: 'inherit', onClick: onClose },
                    react_1.default.createElement(icons_1.Close, null)),
            ] }, other))));
};
exports.default = styles_1.withStyles(styles)(SnackBar);
//# sourceMappingURL=Snackbar.js.map