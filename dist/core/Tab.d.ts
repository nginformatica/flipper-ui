import React from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    disabled?: boolean;
    icon?: string | JSX.Element;
    label?: string;
    value?: unknown;
    selectedClass?: string;
    classes: {
        root: string;
        selected: string;
    };
}
declare const _default: React.ComponentType<Pick<Pick<IProps, "style" | "padding" | "className" | "name" | "id" | "ref" | "classes" | "icon" | "value" | "label" | "selectedClass"> & Partial<Pick<IProps, "margin" | "disabled">> & Partial<Pick<{
    disabled: boolean;
    margin: string;
}, never>>, "style" | "padding" | "margin" | "className" | "name" | "id" | "ref" | "icon" | "disabled" | "value" | "label" | "selectedClass"> & import("@material-ui/core").StyledComponentProps<"root" | "selected">>;
export default _default;
