import React from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    minHeight?: number;
    children?: React.ReactNode;
}
declare const Box: React.SFC<IProps>;
export default Box;
