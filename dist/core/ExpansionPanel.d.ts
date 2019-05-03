import React, { ReactNode } from 'react';
import { IProps as IPaper } from './Paper';
interface IProps extends IPaper {
    actions?: ReactNode;
    classes: {
        content: string;
        expandIcon: string;
    };
    defaultExpanded?: boolean;
    details?: ReactNode;
    disabled?: boolean;
    expandIcon?: ReactNode;
    expanded?: boolean;
    iconPosition?: 'left' | 'right';
    summary?: ReactNode;
    summaryStyle?: object;
    detailsStyle?: object;
    actionsStyle?: object;
    onChange?: (event?: any, expanded?: any) => void;
}
declare const _default: React.ComponentType<Pick<IProps & {
    children?: React.ReactNode;
}, "children" | "style" | "padding" | "margin" | "square" | "elevation" | "className" | "name" | "id" | "ref" | "onChange" | "expanded" | "disabled" | "details" | "summary" | "actions" | "actionsStyle" | "expandIcon" | "iconPosition" | "summaryStyle" | "detailsStyle" | "defaultExpanded"> & import("@material-ui/core/styles").StyledComponentProps<"content" | "expandIcon">>;
export default _default;
