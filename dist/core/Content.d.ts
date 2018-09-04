import React from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    children?: React.ReactNode;
}
declare const Content: ({ children, padding, margin, style, ...otherProps }: IProps) => JSX.Element;
export default Content;
