import React, { Component } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    top: number;
    open: boolean;
    place?: string;
    position?: string;
    onToggle: () => void;
    children: React.ReactNode;
}
declare class Sidebar extends Component<IProps, {}> {
    render(): JSX.Element;
}
export default Sidebar;
