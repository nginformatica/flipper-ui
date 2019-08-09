import { CSSProperties, ReactNode } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    open: boolean;
    fullScreen?: boolean;
    fullWidth?: boolean;
    title?: string | ReactNode;
    titleAction?: string | ReactNode;
    actions?: ReactNode;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg';
    content?: ReactNode;
    text?: string;
    snippet?: ReactNode | JSX.Element;
    PaperProps?: object;
    titleStyle?: CSSProperties;
    snippetStyle?: CSSProperties;
    titleWrapperStyle?: CSSProperties;
    titleActionStyle?: CSSProperties;
    actionsStyle?: CSSProperties;
    contentStyle?: CSSProperties;
    snippetContentStyle?: CSSProperties;
    contentTextStyle?: CSSProperties;
    scroll?: 'body' | 'paper' | 'unset-paper' | 'unset-body';
    onClose?: () => void;
}
interface IStyles {
    classes: {
        root: string;
    };
}
declare const _default: import("react").ComponentType<Pick<IProps & IStyles, "style" | "padding" | "margin" | "className" | "name" | "id" | "title" | "text" | "scroll" | "content" | "open" | "maxWidth" | "fullWidth" | "onClose" | "fullScreen" | "PaperProps" | "titleAction" | "actions" | "snippet" | "titleStyle" | "snippetStyle" | "titleWrapperStyle" | "titleActionStyle" | "actionsStyle" | "contentStyle" | "snippetContentStyle" | "contentTextStyle"> & import("@material-ui/styles/withStyles").StyledComponentProps<"root">>;
export default _default;
