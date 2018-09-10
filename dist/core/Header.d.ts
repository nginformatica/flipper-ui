import React from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    children: React.ReactNode;
    position?: 'absolute' | 'fixed' | 'static' | 'sticky';
    color?: 'default' | 'inherit' | 'primary' | 'secondary';
}
declare const Header: React.SFC<IProps>;
export default Header;
