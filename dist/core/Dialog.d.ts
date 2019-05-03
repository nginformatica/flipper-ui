import { Component, CSSProperties, ReactNode } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    open: boolean;
    fullScreen?: boolean;
    fullWidth?: boolean;
    title?: string | ReactNode;
    actions?: ReactNode;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg';
    content?: ReactNode;
    text?: string;
    PaperProps?: object;
    titleStyle?: CSSProperties;
    actionsStyle?: CSSProperties;
    contentStyle?: CSSProperties;
    contentTextStyle?: CSSProperties;
    scroll?: 'body' | 'paper';
    onClose?: () => void;
}
declare class Dialog extends Component<IProps> {
    renderTitle(title: IProps['title']): JSX.Element;
    renderContent(content: ReactNode): JSX.Element;
    renderText(text: string): JSX.Element;
    renderActions(actions: ReactNode): JSX.Element;
    render(): JSX.Element;
}
export default Dialog;
