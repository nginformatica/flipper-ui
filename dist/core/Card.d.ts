import React from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    xs?: number;
    title?: string;
    children?: React.ReactNode;
}
declare const Card: ({ children, style, title, xs, className }: IProps) => JSX.Element;
export default Card;
