import React from 'react';
interface IProps {
    children: React.ReactNode;
    position?: 'absolute' | 'fixed' | 'static' | 'sticky';
    color?: 'default' | 'inherit' | 'primary' | 'secondary';
    style?: object;
}
export declare const Header: ({ children, color, position, style }: IProps) => JSX.Element;
export default Header;
