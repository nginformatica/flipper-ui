import { ReactNode, SFC } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    children: ReactNode;
    selected?: boolean;
    hover?: boolean;
    onClick?: () => void;
}
declare const TableRow: SFC<IProps>;
export default TableRow;
