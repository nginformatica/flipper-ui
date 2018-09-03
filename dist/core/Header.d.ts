import React from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    children: React.ReactNode;
    position?: 'absolute' | 'fixed' | 'static' | 'sticky';
    color?: 'default' | 'inherit' | 'primary' | 'secondary';
}
export declare const Header: ({ children, ...otherProps }: IProps) => JSX.Element;
export default Header;
