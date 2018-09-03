import React from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    sizes?: string;
    src?: string;
    imgProps?: object;
    primary?: boolean;
    classes: {
        primary: string;
    };
    children: React.ReactNode;
}
declare const _default: React.ComponentType<import("@material-ui/core").Overwrite<Pick<IProps, "style" | "children" | "classes" | "className" | "primary" | "sizes" | "src" | "imgProps">, import("@material-ui/core/styles/withStyles").StyledComponentProps<"primary">>>;
export default _default;
