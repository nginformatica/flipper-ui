import { TableRowProps } from '@material-ui/core/TableRow';
import { FC } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    selected?: boolean;
    hover?: boolean;
    background?: string;
    onClick?: () => void;
}
declare const TableRow: FC<TableRowProps & IProps>;
export default TableRow;
