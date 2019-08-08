import React from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    title?: string;
    dense?: boolean;
    color?: 'primary' | 'secondary' | 'default' | 'inherit';
}
interface IClasses {
    classes?: {
        default: string;
        inherit: string;
        primary: string;
        secondary: string;
    };
}
declare const _default: import("react").ComponentType<Pick<React.PropsWithChildren<IProps & IClasses>, "children" | "style" | "padding" | "margin" | "className" | "name" | "id" | "title" | "color" | "dense"> & import("@material-ui/core").StyledComponentProps<import("@material-ui/core").PropTypes.Color>>;
export default _default;
