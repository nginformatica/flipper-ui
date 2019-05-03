import React, { ChangeEvent, KeyboardEvent } from 'react';
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
    classes: {
        outlinedInput: string;
        outlinedLabel: string;
        outlinedMultiline: string;
    };
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: FocusEvent) => void;
    onKeyUp?: (event: KeyboardEvent) => void;
    onKeyDown?: (event: KeyboardEvent) => void;
}
declare const _default: React.ComponentType<Pick<IProps & {
    children?: React.ReactNode;
}, "children" | "style" | "padding" | "margin" | "className" | "name" | "id" | "ref" | "defaultValue" | "placeholder" | "onBlur" | "onChange" | "onKeyDown" | "onKeyUp" | "disabled" | "error" | "variant" | "value" | "InputProps" | "label" | "select" | "fullWidth" | "type" | "autoFocus" | "inputProps" | "required" | "InputLabelProps" | "autoComplete" | "multiline" | "SelectProps" | "rows" | "rowsMax"> & import("@material-ui/core").StyledComponentProps<"input" | "outlinedInput" | "outlinedLabel" | "outlinedMultiline">>;
export default _default;
