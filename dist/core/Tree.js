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
const Node_1 = __importDefault(require("./Node"));
class Tree extends react_1.Component {
    renderNode(node, index, root = false) {
        const { id, name, nodes } = node;
        return (react_1.default.createElement(Node_1.default, { id: index, name: name, key: id || index, style: root ? { padding: 0 } : {} }, nodes && nodes.map(this.renderNode.bind(this))));
    }
    render() {
        return (this.props.nodes || []).map((node, index) => this.renderNode(node, index, true));
    }
}
exports.default = Tree;
//# sourceMappingURL=Tree.js.map