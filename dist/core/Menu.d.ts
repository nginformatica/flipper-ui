import React from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    open: boolean;
    anchorEl?: HTMLElement;
    children?: React.ReactNode;
    menuProps?: object;
    onClose?: () => void;
}
declare const Menu: React.SFC<IProps>;
export default Menu;
