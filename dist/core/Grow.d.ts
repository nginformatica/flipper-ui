import { FC } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    in: boolean;
    timeout?: number | {
        enter?: number;
        exit?: number;
    } | 'auto';
}
declare const Grow: FC<IProps>;
export default Grow;
