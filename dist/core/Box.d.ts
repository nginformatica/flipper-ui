import React from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    primary?: boolean;
    children?: React.ReactNode;
}
declare const Box: ({ children, style, ...otherProps }: IProps) => JSX.Element;
export default Box;
