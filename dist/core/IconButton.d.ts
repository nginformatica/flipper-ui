import { FC } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    color?: 'default' | 'inherit' | 'primary' | 'secondary';
    disabled?: boolean;
    onClick?: (event?: any) => void;
}
declare const IconButton: FC<IProps>;
export default IconButton;
