import React from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    title?: string;
    children?: React.ReactNode;
}
declare const List: React.SFC<IProps>;
export default List;
