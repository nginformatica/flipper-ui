import React from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    id: number;
    name: string;
    children: React.ReactNode;
}
interface IState {
    open: boolean;
}
declare class Node extends React.Component<IProps, IState> {
    constructor(props: any);
    handleToggleOpen(): void;
    renderDropdownIcon(): JSX.Element;
    render(): JSX.Element;
}
export default Node;
