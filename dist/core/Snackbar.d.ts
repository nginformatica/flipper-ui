import React, { ReactNode, FunctionComponent } from 'react';
import { IDefault } from './Advertise';
import { TransitionProps } from '@material-ui/core/transitions/transition';
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
    transitionDuration?: number | {
        enter: number;
        exit: number;
    };
    anchorOrigin?: {
        horizontal: 'left' | 'center' | 'right';
        vertical: 'top' | 'bottom';
    };
    TransitionProps?: TransitionProps;
    TransitionComponent?: FunctionComponent<TransitionProps>;
    onClose?: (value: any) => void;
}
declare const _default: import("react").ComponentType<Pick<React.PropsWithChildren<IProps>, "children" | "style" | "padding" | "margin" | "className" | "name" | "id" | "open" | "icon" | "variant" | "transitionDuration" | "action" | "onClose" | "TransitionComponent" | "TransitionProps" | "anchorOrigin" | "message" | "autoHide"> & import("@material-ui/styles/withStyles").StyledComponentProps<"icon" | "message">>;
export default _default;
