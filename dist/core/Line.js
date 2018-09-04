"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const colors_1 = require("../colors");
const StyledLine = styled_components_1.default.hr `
    flex: 1;
    border: 1px solid ${props => props.primary
    ? colors_1.primary.normal
    : colors_1.background.normal};
`;
const Line = ({ primary, padding, margin, style }) => react_1.default.createElement(StyledLine, { style: Object.assign({ padding, margin }, style), primary: primary });
exports.default = Line;
//# sourceMappingURL=Line.js.map