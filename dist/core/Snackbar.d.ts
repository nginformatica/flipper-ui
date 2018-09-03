import React from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    autoHide?: number;
    message: React.ReactNode;
    open: boolean;
    variant?: 'success' | 'warning' | 'error' | 'info';
    classes: {
        icon: string;
        message: string;
    };
    anchorOrigin?: {
        horizontal: 'left' | 'center' | 'right';
        vertical: 'top' | 'center' | 'bottom';
    };
    onClose?: (value: any) => void;
}
declare const _default: React.ComponentType<import("@material-ui/core").Overwrite<Pick<IProps, "message" | "style" | "open" | "classes" | "className" | "onClose" | "variant" | "anchorOrigin" | "autoHide">, import("@material-ui/core/styles/withStyles").StyledComponentProps<"message" | "icon">>>;
export default _default;
