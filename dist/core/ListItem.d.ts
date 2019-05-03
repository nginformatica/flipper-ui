import React, { MouseEvent, ReactNode } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    avatar?: JSX.Element;
    icon?: JSX.Element;
    action?: JSX.Element;
    title?: string;
    subtitle?: string;
    value?: string | number;
    children?: ReactNode;
    classes: {
        default: string;
    };
    selected?: boolean;
    onClick?: (event?: MouseEvent) => void;
}
declare const _default: React.ComponentType<Pick<IProps, "children" | "style" | "padding" | "margin" | "className" | "name" | "id" | "ref" | "title" | "onClick" | "icon" | "value" | "selected" | "action" | "avatar" | "subtitle"> & import("@material-ui/core").StyledComponentProps<"default">>;
export default _default;
