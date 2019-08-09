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
declare const _default: import("react").ComponentType<Pick<React.PropsWithChildren<IProps>, "children" | "style" | "padding" | "margin" | "className" | "name" | "id" | "color" | "label" | "avatar" | "clickable" | "deleteIcon" | "onDelete"> & import("@material-ui/styles/withStyles").StyledComponentProps<"root">>;
export default _default;
