import { TableProps } from '@material-ui/core/Table';
import { FC } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    spacing?: TableProps['padding'];
}
declare const Table: FC<TableProps & IProps>;
export default Table;
