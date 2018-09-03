import React from 'react';
interface IProps {
    style?: object;
    sizes?: string;
    src?: string;
    imgProps?: object;
    primary?: boolean;
    classes: {
        primary: string;
    };
    children: React.ReactNode;
}
declare const _default: React.ComponentType<import("@material-ui/core").Overwrite<Pick<IProps, "style" | "children" | "primary" | "classes" | "sizes" | "src" | "imgProps">, import("@material-ui/core/styles/withStyles").StyledComponentProps<"primary">>>;
export default _default;
