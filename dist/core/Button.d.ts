import React from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    mini?: boolean;
    disabled?: boolean;
    color?: 'default' | 'primary' | 'inherit' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    href?: string;
    fullWidth?: boolean;
    variant?: 'text' | 'flat' | 'outlined' | 'contained' | 'raised' | 'fab' | 'extendedFab';
    children?: React.ReactNode;
    onClick?: () => void;
}
declare const Button: React.SFC<IProps>;
export default Button;
