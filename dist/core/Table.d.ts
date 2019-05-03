import { ReactNode, SFC } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    children: ReactNode;
}
declare const Table: SFC<IProps>;
export default Table;
