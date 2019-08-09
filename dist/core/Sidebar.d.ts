import { IDefault } from './Advertise';
import { IProps as IButtonProps } from './Button';
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
    ButtonProps?: IButtonProps;
    classes: {
        button: string;
        default: string;
        icon: string;
        inherit: string;
        primary: string;
        secondary: string;
        sidebar: string;
    };
    onToggle: () => void;
}
declare const _default: import("react").ComponentType<Pick<IProps, "style" | "padding" | "margin" | "className" | "name" | "id" | "color" | "top" | "expanded" | "open" | "variant" | "maxWidth" | "minWidth" | "showButton" | "anchor" | "docked" | "paperClasses" | "ButtonProps" | "onToggle"> & import("@material-ui/styles/withStyles").StyledComponentProps<"button" | "inherit" | "default" | "icon" | "primary" | "secondary" | "sidebar">>;
export default _default;
