import { FC, MouseEvent } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    disabled?: boolean;
    component?: string;
    color?: 'default' | 'primary' | 'inherit' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    href?: string;
    variant?: 'round' | 'extended';
    onClick?: (event?: MouseEvent<HTMLElement>) => void;
}
declare const Fab: FC<IProps>;
export default Fab;
