import React, { Component } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
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
