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
const Dialog_1 = __importDefault(require("@material-ui/core/Dialog"));
const DialogActions_1 = __importDefault(require("@material-ui/core/DialogActions"));
const DialogContent_1 = __importDefault(require("@material-ui/core/DialogContent"));
const DialogContentText_1 = __importDefault(require("@material-ui/core/DialogContentText"));
const DialogTitle_1 = __importDefault(require("@material-ui/core/DialogTitle"));
const react_1 = __importStar(require("react"));
const core_1 = require("@material-ui/core");
const styled_components_1 = __importDefault(require("styled-components"));
const TitleWrapper = styled_components_1.default.div `
    display: flex;
`;
const TitleAction = styled_components_1.default.div `
    padding: 16px 24px;
    align-items: center;
    display: flex;
`;
const Snippet = styled_components_1.default.div `
    display: flex;
`;
const SnippetContent = styled_components_1.default.div `
    position: relative;
    height: inherit;
    display: flex;
`;
const styles = () => ({
    root: {
        overflowY: 'unset'
    }
});
class Dialog extends react_1.Component {
    renderTitle(title) {
        return this.props.titleAction
            ? (react_1.default.createElement(TitleWrapper, { style: this.props.titleWrapperStyle },
                react_1.default.createElement(DialogTitle_1.default, { style: Object.assign({ flex: 1 }, this.props.titleStyle) }, title),
                react_1.default.createElement(TitleAction, { style: this.props.titleActionStyle }, this.props.titleAction)))
            : (react_1.default.createElement(DialogTitle_1.default, { style: this.props.titleStyle }, title));
    }
    renderContent(content) {
        const { scroll } = this.props;
        return (react_1.default.createElement(DialogContent_1.default, { classes: scroll === 'unset-paper' || scroll === 'unset-body'
                ? { root: this.props.classes.root }
                : undefined, style: this.props.contentStyle }, content));
    }
    renderText(text) {
        const content = (react_1.default.createElement(DialogContentText_1.default, { style: this.props.contentTextStyle }, text));
        return this.renderContent(content);
    }
    renderActions(actions) {
        return (react_1.default.createElement(DialogActions_1.default, { style: this.props.actionsStyle }, actions));
    }
    renderPaperContent() {
        const { actions, content, text, title } = this.props;
        return (react_1.default.createElement(react_1.default.Fragment, null,
            title && this.renderTitle(title),
            text ? this.renderText(text) : this.renderContent(content),
            actions && this.renderActions(actions)));
    }
    renderSnippet() {
        return (react_1.default.createElement(Snippet, { style: this.props.snippetStyle },
            react_1.default.createElement("div", null, this.renderPaperContent()),
            react_1.default.createElement(SnippetContent, { style: this.props.snippetContentStyle }, this.props.snippet)));
    }
    render() {
        const { snippet, style, padding, margin, scroll, PaperProps, open, fullScreen, fullWidth, maxWidth, classes, onClose } = this.props;
        const scrollMode = scroll === 'unset-body'
            ? 'body'
            : scroll === 'unset-paper'
                ? 'paper'
                : scroll;
        return (react_1.default.createElement(Dialog_1.default, { open: open, fullScreen: fullScreen, fullWidth: fullWidth, maxWidth: maxWidth, scroll: scrollMode, PaperProps: Object.assign({ classes: scroll === 'unset-body' || scroll === 'unset-paper'
                    ? { root: classes.root }
                    : undefined }, PaperProps), style: Object.assign({ padding, margin }, style), onClose: onClose }, snippet ? this.renderSnippet() : this.renderPaperContent()));
    }
}
exports.default = core_1.withStyles(styles)(Dialog);
//# sourceMappingURL=Dialog.js.map