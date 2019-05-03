import React, { ReactNode } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    title?: string;
    children?: ReactNode;
    dense?: boolean;
    classes: {
        default: string;
        inherit: string;
        primary: string;
        secondary: string;
    };
    color?: 'primary' | 'secondary' | 'default' | 'inherit';
}
declare const _default: React.ComponentType<Pick<IProps & {
    children?: React.ReactNode;
}, "children" | "style" | "padding" | "margin" | "className" | "name" | "id" | "ref" | "title" | "color" | "dense"> & import("@material-ui/core").StyledComponentProps<import("@material-ui/core").PropTypes.Color>>;
export default _default;
