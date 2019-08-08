import React from 'react';
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
}
declare const _default: import("react").ComponentType<Pick<React.PropsWithChildren<IProps>, "children" | "style" | "padding" | "margin" | "className" | "name" | "id" | "primary" | "sizes" | "src" | "imgProps"> & import("@material-ui/core").StyledComponentProps<"primary">>;
export default _default;
