import { SFC } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    collapsedHeight?: string;
    in: boolean;
    timeout?: number | {
        enter?: number;
        exit?: number;
    } | 'auto';
}
declare const Collapse: SFC<IProps>;
export default Collapse;
