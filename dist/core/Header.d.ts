import { FC } from 'react';
import { IProps as IPaper } from './Paper';
interface IProps extends IPaper {
    position?: 'absolute' | 'fixed' | 'static' | 'sticky';
    color?: 'default' | 'inherit' | 'primary' | 'secondary';
}
declare const Header: FC<IProps>;
export default Header;
