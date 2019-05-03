import { ReactNode, SFC } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    open: boolean;
    anchorEl?: HTMLElement;
    children?: ReactNode;
    menuProps?: object;
    anchorOrigin?: {
        horizontal: number | 'left' | 'center' | 'right';
        vertical: number | 'top' | 'center' | 'bottom';
    };
    transformOrigin?: {
        vertical: number | 'top' | 'center' | 'bottom';
        horizontal: number | 'left' | 'center' | 'right';
    };
    onClose?: () => void;
}
declare const Menu: SFC<IProps>;
export default Menu;
