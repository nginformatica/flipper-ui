import React, { Component } from 'react'
import Node from './Node'

interface INode {
    id: string | number
    name: string
    nodes?: INode[]
}

interface IProps {
    nodes?: INode[]
}

class Tree extends Component<IProps> {
    public renderNode(node, index, root = false) {
        const { id, name, nodes } = node

        return (
            <Node
                id={ index }
                name={ name }
                key={ id || index }
                style={ root ? { padding: 0 } :  {} }>
                { nodes && nodes.map(this.renderNode.bind(this)) }
            </Node>
        )
    }

    public render() {
        return this.props.nodes.map((node, index) =>
            this.renderNode(node, index, true)
        )
    }
}

export default Tree
