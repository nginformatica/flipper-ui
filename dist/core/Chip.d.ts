import React from 'react';
interface IProps {
    style?: object;
    label: string;
    clickable?: boolean;
    color?: 'default' | 'primary' | 'secondary';
    avatar?: React.ReactElement<any>;
    deleteIcon?: React.ReactElement<any>;
    onDelete?: (value: any) => void;
}
declare const _default: React.ComponentType<import("@material-ui/core").Overwrite<Pick<IProps, "label" | "style" | "color" | "clickable" | "avatar" | "deleteIcon" | "onDelete">, import("@material-ui/core/styles/withStyles").StyledComponentProps<"root">>>;
export default _default;
