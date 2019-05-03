import React, { ReactNode } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    children: ReactNode;
    numeric?: boolean;
    variant?: 'head' | 'body' | 'footer';
    classes: {
        head: string;
        root: string;
    };
}
declare const _default: React.ComponentType<Pick<IProps & {
    children?: React.ReactNode;
}, "children" | "style" | "padding" | "margin" | "className" | "name" | "id" | "ref" | "variant" | "numeric"> & import("@material-ui/core/styles").StyledComponentProps<"root" | "head">>;
export default _default;
