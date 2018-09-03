import React from 'react';
interface IProps {
    xs?: number;
    title?: string;
    children?: React.ReactNode;
    style: object;
}
declare const Card: ({ children, style, title, xs }: IProps) => JSX.Element;
export default Card;
