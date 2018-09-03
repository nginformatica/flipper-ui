import React from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    minHeight?: number;
    children?: React.ReactNode;
}
declare const Box: ({ children, margin, padding, style, minHeight, ...otherProps }: IProps) => JSX.Element;
export default Box;
