import React from 'react';
interface IProps {
    open: boolean;
    anchorEl?: HTMLElement;
    children?: React.ReactNode;
    menuProps?: object;
    onClose?: () => void;
}
declare const Menu: ({ children, menuProps, ...otherProps }: IProps) => JSX.Element;
export default Menu;
