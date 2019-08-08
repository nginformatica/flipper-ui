import React, { ReactNode, FC, ChangeEvent, KeyboardEvent, CSSProperties, Ref, FocusEvent } from 'react';
interface IProps {
    autoFocus?: boolean;
    defaultIsOpen?: boolean;
    openOnFocus?: boolean;
    selectTextOnFocus?: boolean;
    caseSensitive?: boolean;
    fade?: boolean;
    focusDelay?: number;
    suggestions: ISelected[];
    value: TSelected;
    defaultValue?: string;
    style?: CSSProperties;
    maxHeight?: number;
    actions?: ReactNode | JSX.Element;
    renderSuggestion: (suggestion: string | object, itemProps: object, selected: boolean) => ReactNode;
    onChange: (value: TSelected) => void;
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    renderInput(props: IInputProps): React.ReactElement;
}
interface IInputProps {
    value: string;
    inputProps: {
        ref: Ref<HTMLInputElement>;
    };
    onChange(event: ChangeEvent<HTMLInputElement>): void;
    onFocus(event: FocusEvent<HTMLInputElement>): void;
    onBlur(event: FocusEvent<HTMLInputElement>): void;
    onKeyDown(event: KeyboardEvent): void;
}
interface ISelected {
    label: string;
    value?: string;
    type?: string;
    subheader?: boolean;
}
declare type TSelected = ISelected | string;
declare const AutoComplete: FC<IProps>;
export default AutoComplete;
