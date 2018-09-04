import React from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    title?: string;
    children?: React.ReactNode;
}
declare const List: ({ title, padding, margin, style, children, className }: IProps) => JSX.Element;
export default List;
