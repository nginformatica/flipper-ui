import React, { ChangeEvent } from 'react';
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
    classes: {
        input: string;
        root: string;
        label: string;
    };
    InputProps?: object;
    InputLabelProps?: object;
    SelectProps?: object;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
declare const _default: React.ComponentType<import("@material-ui/core").Overwrite<Pick<IProps, "margin" | "padding" | "required" | "disabled" | "error" | "label" | "select" | "style" | "classes" | "name" | "defaultValue" | "className" | "id" | "placeholder" | "onChange" | "type" | "autoFocus" | "value" | "fullWidth" | "multiline" | "autoComplete" | "InputProps" | "InputLabelProps" | "SelectProps">, import("@material-ui/core/styles/withStyles").StyledComponentProps<"input" | "label" | "root">>>;
export default _default;
