import { WithStyles } from '@material-ui/core';
import React, { ChangeEvent } from 'react';
export interface IProps extends WithStyles<typeof styles> {
    autoComplete?: string;
    autoFocus?: boolean;
    defaultValue?: string | number;
    disabled?: boolean;
    error?: boolean;
    fullWidth?: boolean;
    id?: string;
    label?: string;
    placeholder?: string;
    style?: object;
    margin?: number;
    multiline?: boolean;
    name?: string;
    required?: boolean;
    select?: boolean;
    type?: string;
    value?: string | number | boolean | string[];
    InputProps?: object;
    InputLabelProps?: object;
    SelectProps?: object;
    onChange?: (event: ChangeEvent<HTMLElement>) => {};
}
declare const styles: (theme: any) => Record<"input" | "label" | "root", import("@material-ui/core/styles/withStyles").CSSProperties>;
declare const _default: React.ComponentType<import("@material-ui/core").Overwrite<Pick<IProps, "label" | "select" | "style" | "defaultValue" | "id" | "placeholder" | "onChange" | "innerRef" | "margin" | "disabled" | "classes" | "error" | "fullWidth" | "type" | "autoFocus" | "name" | "value" | "required" | "autoComplete" | "multiline" | "InputProps" | "InputLabelProps" | "SelectProps">, import("@material-ui/core/styles/withStyles").StyledComponentProps<"input" | "label" | "root">>>;
export default _default;
