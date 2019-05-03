import React, { ReactNode } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    name?: string;
    id?: string;
    sizes?: string;
    src?: string;
    imgProps?: object;
    primary?: boolean;
    classes: {
        primary: string;
    };
    children: ReactNode;
}
declare const _default: React.ComponentType<Pick<IProps & {
    children?: React.ReactNode;
}, "children" | "style" | "padding" | "margin" | "className" | "name" | "id" | "ref" | "primary" | "sizes" | "src" | "imgProps"> & import("@material-ui/core").StyledComponentProps<"primary">>;
export default _default;
