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
const ramda_1 = require("ramda");
const react_1 = __importStar(require("react"));
const md_1 = require("react-icons/md");
const styled_components_1 = __importDefault(require("styled-components"));
const Button_1 = __importDefault(require("./Button"));
const Content = styled_components_1.default.div `
    display: flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    justify-content: center;
    margin: 0.75em;
`;
class Pagination extends react_1.Component {
    render() {
        const { active, style, padding, margin, pages = 1, className } = this.props;
        const allPages = ramda_1.times(ramda_1.inc, pages || 1);
        return (react_1.default.createElement(Content, { className: className, style: Object.assign({ padding, margin }, style) },
            react_1.default.createElement(Button_1.default, { mini: true, onClick: this.props.onPrevious },
                react_1.default.createElement(md_1.MdKeyboardArrowLeft, null)),
            allPages.map(page => react_1.default.createElement(Button_1.default, { mini: true, key: page, color: page === active ? 'primary' : 'default', onClick: () => this.props.onNavigate(page) }, page)),
            react_1.default.createElement(Button_1.default, { mini: true, onClick: this.props.onNext },
                react_1.default.createElement(md_1.MdKeyboardArrowRight, null))));
    }
}
exports.default = Pagination;
//# sourceMappingURL=Pagination.js.map