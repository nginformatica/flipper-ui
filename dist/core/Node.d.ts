import { Component, ReactNode } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    name: string;
    children: ReactNode;
}
interface IState {
    open: boolean;
}
declare class Node extends Component<IProps, IState> {
    constructor(props: any);
    handleToggleOpen(): void;
    renderDropdownIcon(): JSX.Element;
    render(): JSX.Element;
}
export default Node;
