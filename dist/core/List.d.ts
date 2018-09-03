import React from 'react';
interface IProps {
    title?: string;
    children?: React.ReactNode;
    style?: object;
}
declare const List: ({ title, style, children }: IProps) => JSX.Element;
export default List;
