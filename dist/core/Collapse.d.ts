import { FC } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    collapsedHeight?: string;
    in: boolean;
    timeout?: number | {
        enter?: number;
        exit?: number;
    } | 'auto';
}
declare const Collapse: FC<IProps>;
export default Collapse;
