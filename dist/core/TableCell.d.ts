import { TableCellProps } from '@material-ui/core/TableCell';
import { FC } from 'react';
import { IDefault } from './Advertise';
import { Omit } from 'ramda';
interface IProps extends IDefault {
    numeric?: boolean;
    variant?: 'head' | 'body' | 'footer';
    spacing?: TableCellProps['padding'];
    padding?: number | string;
    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
}
declare const TableCell: FC<Omit<TableCellProps, 'padding'> & IProps>;
export default TableCell;
