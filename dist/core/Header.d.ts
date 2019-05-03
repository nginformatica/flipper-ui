import { ReactNode, SFC } from 'react';
import { IProps as IPaper } from './Paper';
interface IProps extends IPaper {
    children: ReactNode;
    position?: 'absolute' | 'fixed' | 'static' | 'sticky';
    color?: 'default' | 'inherit' | 'primary' | 'secondary';
}
declare const Header: SFC<IProps>;
export default Header;
