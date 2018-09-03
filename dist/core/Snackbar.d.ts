import { WithStyles } from '@material-ui/core/styles';
import React from 'react';
interface IProps extends WithStyles<typeof styles> {
    autoHide?: number;
    message: React.ReactNode;
    open: boolean;
    style?: object;
    variant?: 'success' | 'warning' | 'error' | 'info';
    anchorOrigin?: {
        horizontal: 'left' | 'center' | 'right';
        vertical: 'top' | 'center' | 'bottom';
    };
    onClose?: (value: any) => void;
}
declare const styles: (theme: any) => {
    icon: {
        fontSize: number;
        marginRight: any;
        opacity: number;
    };
    message: {
        alignItems: string;
        display: string;
    };
};
declare const _default: React.ComponentType<import("@material-ui/core").Overwrite<Pick<IProps, "style" | "innerRef" | "open" | "classes" | "variant" | "onClose" | "anchorOrigin" | "message" | "autoHide">, import("@material-ui/core/styles/withStyles").StyledComponentProps<"icon" | "message">>>;
export default _default;
