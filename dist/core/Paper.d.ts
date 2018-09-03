import React from 'react';
interface IProps {
    children?: React.ReactNode;
    style?: object;
    square?: boolean;
    elevation?: number;
    padding?: number;
    margin?: number;
}
declare const Paper: ({ children, style, padding, margin, ...otherProps }: IProps) => JSX.Element;
export default Paper;
