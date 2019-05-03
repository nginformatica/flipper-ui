import React, { ReactNode } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    open: boolean;
    expanded?: boolean;
    showButton?: boolean;
    anchor?: 'top' | 'left' | 'bottom' | 'right';
    variant?: 'persistent' | 'temporary' | 'permanent';
    color?: 'primary' | 'secondary' | 'default' | 'inherit';
    docked?: boolean;
    maxWidth?: number | string;
    minWidth?: number | string;
    top?: number | string;
    paperClasses?: object;
    name?: string;
    classes: {
        button: string;
        default: string;
        icon: string;
        inherit: string;
        primary: string;
        secondary: string;
        sidebar: string;
    };
    children: ReactNode;
    onToggle: () => void;
}
declare const _default: React.ComponentType<Pick<IProps, "children" | "style" | "padding" | "margin" | "className" | "name" | "id" | "ref" | "color" | "top" | "expanded" | "open" | "variant" | "maxWidth" | "minWidth" | "showButton" | "anchor" | "docked" | "paperClasses" | "onToggle"> & import("@material-ui/core/styles").StyledComponentProps<"inherit" | "default" | "icon" | "button" | "primary" | "secondary" | "sidebar">>;
export default _default;
