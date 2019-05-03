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
const downshift_1 = __importDefault(require("downshift"));
const ramda_1 = require("ramda");
const react_1 = __importStar(require("react"));
const Paper_1 = __importDefault(require("./Paper"));
class AutoComplete extends react_1.Component {
    constructor() {
        super(...arguments);
        this.autocomplete = null;
    }
    getPaperPosition(inputValue) {
        if (this.autocomplete !== null) {
            const height = this.getSuggestions(inputValue).length * 48;
            const { top } = this.autocomplete.getBoundingClientRect();
            if ((top + height) > window.innerHeight) {
                return 'above';
            }
        }
        return 'below';
    }
    getSuggestions(inputValue) {
        if (this.props.openOnFocus && !inputValue) {
            return this.props.data;
        }
        const items = inputValue
            ? this.props.data
            : [];
        return ramda_1.uniq(ramda_1.filter(ramda_1.unless(ramda_1.propEq('subheader', true), ramda_1.pipe(ramda_1.when(ramda_1.is(Object), ramda_1.propOr('', 'label')), ramda_1.toLower, ramda_1.contains(ramda_1.toLower(inputValue || '')))), items));
    }
    handleSelect(value) {
        if (this.props.onSelect) {
            this.props.onSelect(value);
        }
        else {
            this.handleChange(value);
        }
    }
    handleChange(value) {
        if (!ramda_1.isNil(value) && this.props.onChange) {
            this.props.onChange(value);
        }
    }
    renderInput(props) {
        return react_1.cloneElement(this.props.inputElement, {
            InputProps: Object.assign({}, props, this.props.InputProps),
            inputProps: {
                ref: (self) => {
                    this.autocomplete = self;
                }
            }
        });
    }
    renderSugestionPaper({ inputValue, getItemProps, highlightedIndex }) {
        const paperStyle = {
            position: 'absolute',
            width: this.autocomplete ? this.autocomplete.offsetWidth : 256,
            bottom: this.getPaperPosition(inputValue) === 'above'
                && this.autocomplete
                ? this.autocomplete.offsetHeight + 1
                : undefined,
            zIndex: 1099
        };
        return (react_1.default.createElement(Paper_1.default, { square: true, style: paperStyle }, this.getSuggestions(inputValue).map((suggestion, index) => react_1.default.createElement(react_1.Fragment, { key: index }, this.props.renderSuggestion(suggestion, getItemProps({ item: suggestion }), highlightedIndex === index)))));
    }
    render() {
        return (react_1.default.createElement(downshift_1.default, { inputValue: this.props.value, defaultInputValue: this.props.defaultValue, selectedItem: this.props.selected, defaultIsOpen: this.props.defaultIsOpen, itemToString: item => ramda_1.is(Object, item) ? item.label : item, onSelect: this.handleSelect.bind(this), onInputValueChange: this.props.onChange }, ({ isOpen, getInputProps, inputValue, getItemProps, highlightedIndex, openMenu }) => react_1.default.createElement("div", { style: this.getPaperPosition(inputValue) === 'above'
                ? {
                    display: 'flex',
                    position: 'relative',
                    flexFlow: 'column-reverse'
                }
                : {} },
            this.renderInput(getInputProps({
                onBlur: this.props.onBlur,
                onFocus: (event) => this.props.onFocus
                    ? this.props.onFocus(event)
                    : this.props.openOnFocus
                        ? openMenu()
                        : null,
                value: inputValue || ''
            })),
            isOpen && this.renderSugestionPaper({
                inputValue,
                getItemProps,
                highlightedIndex
            }))));
    }
}
exports.default = AutoComplete;
//# sourceMappingURL=AutoComplete.js.map