import { FC } from 'react';
import { IDefault } from './Advertise';
import { MenuProps } from '@material-ui/core/Menu';
import { PopoverProps } from '@material-ui/core/Popover';
interface IProps extends IDefault, PopoverProps, MenuProps {
    open: boolean;
    anchorEl?: HTMLElement;
    withWrapper?: boolean;
}
declare const Menu: FC<IProps>;
export default Menu;
