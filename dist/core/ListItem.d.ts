import { MouseEvent } from 'react';
import { IDefault } from './Advertise';
import { Omit } from 'ramda';
interface IProps extends Omit<IDefault, 'name'> {
    avatar?: JSX.Element;
    icon?: JSX.Element;
    action?: JSX.Element;
    title?: string | JSX.Element;
    subtitle?: string | JSX.Element;
    value?: string | number;
    classes: {
        default: string;
    };
    selected?: boolean;
    disabled?: boolean;
    onClick?: (event?: MouseEvent) => void;
}
declare const _default: import("react").ComponentType<Pick<IProps, "style" | "padding" | "margin" | "className" | "id" | "title" | "onClick" | "icon" | "disabled" | "value" | "action" | "selected" | "avatar" | "subtitle"> & import("@material-ui/styles/withStyles").StyledComponentProps<"default">>;
export default _default;
