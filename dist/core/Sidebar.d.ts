import React, { Component } from 'react';
interface IProps {
    top: number;
    open: boolean;
    place?: string;
    position?: string;
    onToggle: () => {};
    children: React.ReactNode;
}
declare class Sidebar extends Component<IProps> {
    render(): JSX.Element;
}
export default Sidebar;
