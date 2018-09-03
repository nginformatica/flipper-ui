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
class Badge extends react_1.Component {
    render() {
        const _a = this.props, { children, counter, color, limit = 99 } = _a, otherProps = __rest(_a, ["children", "counter", "color", "limit"]);
        return Boolean(counter)
            ? (react_1.default.createElement(core_1.Badge, Object.assign({ badgeContent: counter > limit
                    ? `+${limit}`
                    : counter, color: color }, otherProps), children))
            : children;
    }
}
Badge.defaultProps = {
    color: 'primary',
    limit: 99
};
exports.default = Badge;
//# sourceMappingURL=Badge.js.map