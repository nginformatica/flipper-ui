import React, { Component } from 'react'
import Node from './Node'

export interface INode {
    id: string | number
    name: string
    nodes?: INode[]
}

interface TreeProps {
    nodes?: INode[]
}

class Tree extends Component<TreeProps, {}> {
    public renderNode(node: INode, index: string, root = false) {
        const { id, name, nodes } = node

        return (
            <Node
                id={index}
                name={name}
                key={id || index}
                style={root ? { padding: 0 } : {}}>
                {nodes && nodes.map(this.renderNode.bind(this))}
            </Node>
        )
    }

    public render() {
        return (this.props.nodes || []).map((node, index) =>
            this.renderNode(node, index.toString(), true)
        )
    }
}

export default Tree
