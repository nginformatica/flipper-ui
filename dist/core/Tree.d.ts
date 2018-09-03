import { Component } from 'react';
interface INode {
    id: string | number;
    name: string;
    nodes?: INode[];
}
interface IProps {
    nodes?: INode[];
}
declare class Tree extends Component<IProps> {
    renderNode(node: any, index: any, root?: boolean): JSX.Element;
    render(): JSX.Element[];
}
export default Tree;
