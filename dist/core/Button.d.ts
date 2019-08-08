import { ElementType, MouseEvent } from 'react';
import { IDefault } from './Advertise';
export interface IProps extends IDefault {
    disabled?: boolean;
    selected?: boolean;
    component?: ElementType;
    color?: 'default' | 'primary' | 'inherit' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    href?: string;
    fullWidth?: boolean;
    variant?: 'text' | 'outlined' | 'contained' | 'dashed';
    target?: string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
declare const ButtonStyled: import("styled-components").StyledComponentClass<IProps, any, Pick<IProps, "style" | "padding" | "margin" | "className" | "name" | "id" | "color" | "onClick" | "size" | "disabled" | "component" | "variant" | "target" | "href" | "selected" | "fullWidth"> & {
    theme?: any;
}>;
export default ButtonStyled;
