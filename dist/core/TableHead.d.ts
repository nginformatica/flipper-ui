import React, { ReactNode } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    children: ReactNode;
    color?: 'primary' | 'secondary' | 'default' | 'inherit';
    classes: {
        default: string;
        inherit: string;
        primary: string;
        secondary: string;
    };
}
declare const _default: React.ComponentType<Pick<IProps & {
    children?: React.ReactNode;
}, "children" | "style" | "padding" | "margin" | "className" | "name" | "id" | "ref" | "color"> & import("@material-ui/core/styles").StyledComponentProps<import("@material-ui/core").PropTypes.Color>>;
export default _default;
