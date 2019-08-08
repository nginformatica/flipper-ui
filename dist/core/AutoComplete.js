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
const Paper_1 = __importDefault(require("./Paper"));
const Fade_1 = __importDefault(require("./Fade"));
const AutoComplete = props => {
    const inputRef = react_1.useRef(null);
    const index = props.suggestions
        .findIndex(suggestion => {
        if (props.value && typeof props.value === 'object') {
            return props.value.value === suggestion.value;
        }
        return false;
    });
    const [highlighted, setHighlighted] = react_1.useState(Math.max(0, index));
    const [open, setOpen] = react_1.useState(Boolean(props.defaultIsOpen));
    react_1.useEffect(() => {
        if (props.autoFocus) {
            if (inputRef.current) {
                inputRef.current.focus();
                if (props.openOnFocus) {
                    setOpen(true);
                }
            }
        }
        else if (props.focusDelay) {
            setTimeout(() => {
                if (inputRef.current) {
                    inputRef.current.focus();
                }
                if (props.openOnFocus) {
                    setOpen(true);
                }
            }, props.focusDelay);
        }
    }, []);
    const inputValue = typeof props.value === 'object'
        ? props.value.label
        : props.value || '';
    const handleSelect = (item) => {
        if (typeof item === 'object' && item.subheader) {
            return;
        }
        setOpen(false);
        props.onChange(item);
    };
    const getSuggestions = (value = inputValue) => {
        if (props.openOnFocus && !value) {
            return props.suggestions;
        }
        const items = value
            ? props.suggestions
            : [];
        return items
            .filter(item => {
            if (typeof item === 'object') {
                if (typeof props.value === 'string' && !item.subheader) {
                    return props.caseSensitive
                        ? ramda_1.contains(value, item.label)
                        : ramda_1.contains(ramda_1.toLower(value), ramda_1.toLower(item.label));
                }
                return true;
            }
            return props.caseSensitive
                ? ramda_1.contains(value, item)
                : ramda_1.contains(ramda_1.toLower(value), ramda_1.toLower(item));
        });
    };
    const getPaperPosition = () => {
        if (inputRef.current !== null) {
            const height = props.maxHeight || (getSuggestions().length * 48);
            const { top } = inputRef.current.getBoundingClientRect();
            if ((top + height) > window.innerHeight) {
                return 'above';
            }
        }
        return 'below';
    };
    const getItemProps = (item) => ({
        onClick: (event) => {
            event.preventDefault();
            event.stopPropagation();
            handleSelect(item);
        }
    });
    const handleFocus = (event) => {
        if (props.openOnFocus) {
            setOpen(true);
        }
        if (props.selectTextOnFocus && event.target) {
            const input = event.target;
            if (input.select) {
                input.select();
            }
        }
        if (props.onFocus) {
            props.onFocus(event);
        }
    };
    const handleBlur = (event) => {
        setTimeout(() => setOpen(false), 200);
        if (props.onBlur) {
            props.onBlur(event);
        }
    };
    const handleChange = (event) => {
        setHighlighted(0);
        props.onChange(event.target.value);
        if (getSuggestions(event.target.value).length > 0 || props.actions) {
            setOpen(true);
        }
        else {
            setOpen(false);
        }
    };
    const renderSuggestions = () => {
        const paperStyle = {
            position: 'absolute',
            width: inputRef.current ? inputRef.current.offsetWidth : 256,
            bottom: getPaperPosition() === 'above' && inputRef.current
                ? inputRef.current.getBoundingClientRect().height + 1
                : undefined,
            zIndex: 1099
        };
        return (react_1.default.createElement(Paper_1.default, { square: true, style: paperStyle },
            react_1.default.createElement("div", { style: { overflow: 'auto', maxHeight: props.maxHeight } }, getSuggestions().map((suggestion, index) => react_1.default.createElement(react_1.Fragment, { key: index }, props.renderSuggestion(suggestion, getItemProps(suggestion), highlighted === index)))),
            props.actions));
    };
    const renderPaper = () => props.fade
        ? (react_1.default.createElement(Fade_1.default, { in: open }, renderSuggestions()))
        : renderSuggestions();
    const handleNavigate = (event) => {
        if (event.key === 'ArrowDown' && highlighted < getSuggestions().length - 1) {
            setHighlighted(highlighted + 1);
        }
        else if (event.key === 'ArrowUp' && highlighted > 0) {
            setHighlighted(highlighted - 1);
        }
        else if (event.key === 'Escape') {
            setOpen(false);
        }
        else if (event.key === 'Enter') {
            const item = getSuggestions()[highlighted];
            handleSelect(item);
        }
    };
    return (react_1.default.createElement("div", { style: Object.assign({ position: 'relative' }, props.style) },
        props.renderInput({
            value: inputValue,
            inputProps: {
                ref: inputRef
            },
            onChange: handleChange,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onKeyDown: handleNavigate
        }),
        open && renderPaper()));
};
exports.default = AutoComplete;
//# sourceMappingURL=AutoComplete.js.map