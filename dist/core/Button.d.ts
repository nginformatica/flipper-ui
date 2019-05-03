import { ReactNode } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    mini?: boolean;
    disabled?: boolean;
    selected?: boolean;
    component?: string;
    color?: 'default' | 'primary' | 'inherit' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    href?: string;
    fullWidth?: boolean;
    variant?: 'text' | 'flat' | 'outlined' | 'contained' | 'fab' | 'extendedFab' | 'dashed';
    target?: string;
    children?: ReactNode;
    onClick?: (event?: any) => void;
}
declare const ButtonStyled: import("styled-components").StyledComponentClass<IProps, any, Pick<IProps, "children" | "style" | "padding" | "margin" | "className" | "name" | "id" | "ref" | "color" | "onClick" | "size" | "disabled" | "component" | "variant" | "selected" | "mini" | "href" | "fullWidth" | "target"> & {
    theme?: any;
}>;
export default ButtonStyled;
