import React from 'react';
interface IProps {
    style?: object;
    primary?: boolean;
    children?: React.ReactNode;
}
declare const Box: ({ children, ...otherProps }: IProps) => JSX.Element;
export default Box;
