import React from 'react';
interface IProps {
    mini?: boolean;
    style?: object;
    disabled?: boolean;
    color?: 'default' | 'primary' | 'inherit' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    href?: string;
    margin?: number;
    fullWidth?: boolean;
    variant?: 'text' | 'flat' | 'outlined' | 'contained' | 'raised' | 'fab' | 'extendedFab';
    children?: React.ReactNode;
    onClick?: () => void;
}
declare const Button: ({ children, margin, style, ...otherProps }: IProps) => JSX.Element;
export default Button;
