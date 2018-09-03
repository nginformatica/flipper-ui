import React from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    children?: React.ReactNode;
    square?: boolean;
    elevation?: number;
    padding?: number;
    margin?: number;
}
declare const Paper: ({ children, style, padding, margin, ...otherProps }: IProps) => JSX.Element;
export default Paper;
