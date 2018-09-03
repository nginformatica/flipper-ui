import React from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    children?: React.ReactNode;
}
declare const Container: ({ children, ...otherProps }: IProps) => JSX.Element;
export default Container;
