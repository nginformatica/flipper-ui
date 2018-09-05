import React from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    children?: React.ReactNode;
    square?: boolean;
    elevation?: number;
}
declare const Paper: React.SFC<IProps>;
export default Paper;
