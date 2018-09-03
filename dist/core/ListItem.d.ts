import React, { Component } from 'react';
interface IProps {
    style?: object;
    icon?: React.ReactElement<any>;
    action?: React.ReactElement<any>;
    name?: string;
    title?: string;
    subtitle?: string;
    iconOnly?: boolean;
    value?: string | number;
    children?: React.ReactNode;
    onClick?: (name: any) => {};
}
declare class ListItem extends Component<IProps> {
    renderCustomItem(): JSX.Element;
    render(): JSX.Element;
}
export default ListItem;
