import React, { ReactNode } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    centered?: boolean;
    fullWidth?: boolean;
    scrollable?: boolean;
    value: string | number;
    color?: 'default' | 'inherit' | 'primary' | 'secondary';
    classes: {
        default: string;
        inherit: string;
        primary: string;
        secondary: string;
        indicator: string;
    };
    children?: ReactNode;
    onChange?: (event: object, value: number) => void;
}
declare const _default: React.ComponentType<Pick<Pick<IProps, "children" | "style" | "margin" | "className" | "name" | "id" | "ref" | "classes" | "color" | "onChange" | "value"> & Partial<Pick<IProps, "padding" | "fullWidth" | "centered" | "scrollable">> & Partial<Pick<{
    centered: boolean;
    fullWidth: boolean;
    padding: string;
    scrollable: boolean;
}, never>>, "children" | "style" | "padding" | "margin" | "className" | "name" | "id" | "ref" | "color" | "onChange" | "value" | "fullWidth" | "centered" | "scrollable"> & import("@material-ui/core").StyledComponentProps<"inherit" | "default" | "primary" | "secondary" | "indicator">>;
export default _default;
