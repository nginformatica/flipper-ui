import React, { ReactNode } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    autoHide?: number;
    message: ReactNode;
    open: boolean;
    action?: ReactNode;
    icon?: ReactNode;
    variant?: 'success' | 'warning' | 'error' | 'info';
    classes: {
        icon: string;
        message: string;
    };
    anchorOrigin?: {
        horizontal: 'left' | 'center' | 'right';
        vertical: 'top' | 'bottom';
    };
    onClose?: (value: any) => void;
}
declare const _default: React.ComponentType<Pick<IProps & {
    children?: React.ReactNode;
}, "children" | "style" | "padding" | "margin" | "className" | "name" | "id" | "ref" | "open" | "icon" | "variant" | "action" | "onClose" | "anchorOrigin" | "message" | "autoHide"> & import("@material-ui/core").StyledComponentProps<"icon" | "message">>;
export default _default;
