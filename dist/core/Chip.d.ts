import React from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    label: string;
    clickable?: boolean;
    color?: 'default' | 'primary' | 'secondary';
    avatar?: JSX.Element;
    deleteIcon?: JSX.Element;
    onDelete?: (value: any) => void;
}
declare const _default: React.ComponentType<Pick<IProps & {
    children?: React.ReactNode;
}, "children" | "style" | "padding" | "margin" | "className" | "name" | "id" | "ref" | "color" | "label" | "clickable" | "avatar" | "deleteIcon" | "onDelete"> & import("@material-ui/core").StyledComponentProps<"root">>;
export default _default;
