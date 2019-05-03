import React, { Component, FocusEvent, ReactNode } from 'react';
interface IProps {
    data: object[] | string[];
    value: string;
    defaultValue?: string;
    inputElement: JSX.Element;
    InputProps?: object;
    defaultIsOpen?: boolean;
    openOnFocus?: boolean;
    selected?: ISelected | ISelected[];
    renderSuggestion: (suggestion: string | object, itemProps: object, selected: boolean) => ReactNode;
    onChange?: (value: string | ISelected) => void;
    onSelect?: (value: ISelected) => void;
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}
interface ISelected {
    label: string;
    value: string;
    type?: string;
}
declare class AutoComplete extends Component<IProps> {
    autocomplete: HTMLInputElement | null;
    private getPaperPosition;
    getSuggestions(inputValue: string | null): Array<string | object>;
    handleSelect(value: ISelected): void;
    handleChange(value: string | ISelected): void;
    renderInput(props: {
        inputProps: object;
        onFocus: (event: FocusEvent<HTMLInputElement>) => void;
    }): React.ReactElement<any>;
    renderSugestionPaper({ inputValue, getItemProps, highlightedIndex }: {
        inputValue: any;
        getItemProps: any;
        highlightedIndex: any;
    }): JSX.Element;
    render(): JSX.Element;
}
export default AutoComplete;
