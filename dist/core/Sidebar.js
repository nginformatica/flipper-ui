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
const react_1 = __importStar(require("react"));
const md_1 = require("react-icons/md");
const styled_components_1 = __importDefault(require("styled-components"));
const colors_1 = require("../colors");
const Button_1 = __importDefault(require("./Button"));
const styles = {
    button: {
        alignSelf: 'right',
        margin: 4,
        padding: '0 0.25em'
    },
    icon: {
        fontSize: '24px'
    }
};
const Wrapper = styled_components_1.default.div `
    display: block;
    position: relative;
    width: ${props => props.width}px;
    ${props => props.place}: 0;
`;
const StyledSidebar = styled_components_1.default.div `
    position: ${props => props.position};
    width: ${props => props.width}px;
    height: 100%;
    top: ${props => props.top || 0}px;
    text-align: center;
    bottom: 0;
    background: ${colors_1.background.normal};
    ${props => props.place}: 0;
`;
const Action = styled_components_1.default.div `
    flex-direction: ${props => props.place === 'left'
    ? 'row-reverse'
    : 'row'};
    display: flex;
`;
class Sidebar extends react_1.Component {
    render() {
        const { open, place = 'left', position = 'relative', top, className } = this.props;
        const width = open
            ? 200
            : 72;
        const iconToLeft = (place === 'left' && open)
            || (place === 'right' && !open);
        return (react_1.default.createElement(Wrapper, { place: place, className: className, width: width },
            react_1.default.createElement(StyledSidebar, { top: top, place: place, width: width, position: position },
                react_1.default.createElement(Action, { place: place },
                    react_1.default.createElement(Button_1.default, { style: styles.button, onClick: this.props.onToggle }, iconToLeft
                        ? react_1.default.createElement(md_1.MdKeyboardArrowLeft, { style: styles.icon })
                        : react_1.default.createElement(md_1.MdKeyboardArrowRight, { style: styles.icon }))),
                this.props.children)));
    }
}
exports.default = Sidebar;
//# sourceMappingURL=Sidebar.js.map