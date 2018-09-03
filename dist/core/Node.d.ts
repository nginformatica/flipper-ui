import React from 'react';
interface IProps {
    id: number;
    name: string;
    style: object;
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
