import React, { ChangeEvent, KeyboardEvent, FocusEvent } from 'react';
import { IDefault } from './Advertise';
export interface IProps extends IDefault {
    autoComplete?: string;
    autoFocus?: boolean;
    defaultValue?: string | number;
    disabled?: boolean;
    error?: boolean;
    fullWidth?: boolean;
    id?: string;
    label?: string;
    placeholder?: string;
    multiline?: boolean;
    name?: string;
    required?: boolean;
    select?: boolean;
    type?: string;
    value?: string | number | boolean | string[];
    variant?: 'standard' | 'outlined' | 'filled';
    inputProps?: object;
    InputProps?: object;
    InputLabelProps?: object;
    SelectProps?: object;
    rows?: string | number;
    rowsMax?: string | number;
    helperText?: React.ReactNode;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    onKeyUp?: (event: KeyboardEvent) => void;
    onKeyDown?: (event: KeyboardEvent) => void;
}
export interface IClasses {
    classes: {
        outlinedInput: string;
        outlinedLabel: string;
        outlinedMultiline: string;
    };
}
export declare const styles: () => {
    input: {
        fontSize: string;
        padding: string;
        height: string;
    };
    outlinedInput: {
        fontSize: string;
        padding: string;
        height: string;
    };
    outlinedLabel: {
        fontSize: string;
        transform: string;
    };
    outlinedMultiline: {
        padding: string;
    };
};
declare const _default: import("react").ComponentType<Pick<React.PropsWithChildren<IProps & IClasses>, "children" | "style" | "padding" | "margin" | "className" | "name" | "id" | "defaultValue" | "placeholder" | "onBlur" | "onChange" | "onKeyDown" | "onKeyUp" | "label" | "select" | "disabled" | "error" | "variant" | "type" | "autoFocus" | "value" | "autoComplete" | "required" | "rows" | "fullWidth" | "inputProps" | "InputLabelProps" | "InputProps" | "multiline" | "SelectProps" | "rowsMax" | "helperText"> & import("@material-ui/core").StyledComponentProps<"input" | "outlinedInput" | "outlinedLabel" | "outlinedMultiline">>;
export default _default;
