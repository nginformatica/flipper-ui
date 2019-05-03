import { ReactNode, SFC } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    children?: ReactNode;
    color?: 'default' | 'inherit' | 'primary' | 'secondary';
    disabled?: boolean;
    onClick?: (event?: any) => void;
}
declare const IconButton: SFC<IProps>;
export default IconButton;
