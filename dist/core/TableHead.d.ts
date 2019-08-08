import React from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    color?: 'primary' | 'secondary' | 'default' | 'inherit';
    classes: {
        default: string;
        inherit: string;
        primary: string;
        secondary: string;
    };
}
declare const _default: import("react").ComponentType<Pick<React.PropsWithChildren<IProps>, "children" | "style" | "padding" | "margin" | "className" | "name" | "id" | "color"> & import("@material-ui/core/styles").StyledComponentProps<import("@material-ui/core").PropTypes.Color>>;
export default _default;
