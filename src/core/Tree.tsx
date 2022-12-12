import React from 'react'
import Node from './Node'

export interface INode {
    id: string | number
    name: string
    nodes?: INode[]
}

interface TreeProps {
    nodes?: INode[]
}

// class Tree extends Component<TreeProps, {}> {
//     public renderNode(node: INode, index: string, root = false) {
//         const { id, name, nodes } = node

//         return (
//             <Node
//                 id={index}
//                 name={name}
//                 key={id || index}
//                 style={root ? { padding: 0 } : {}}>
//                 {nodes && nodes.map(this.renderNode.bind(this))}
//             </Node>
//         )
//     }

//     public render() {
//         return (this.props.nodes || []).map((node, index) =>
//             this.renderNode(node, index.toString(), true)
//         )
//     }
// }

// convert to a functional component
const Tree = ({ nodes = [] }: TreeProps) => {
    const renderNode = (node: INode, index: string, root = false) => {
        const { id, name, nodes } = node

        return (
            <Node
                id={index}
                name={name}
                key={id || index}
                style={root ? { padding: 0 } : {}}>
                {nodes &&
                    nodes.map(node => {
                        renderNode(node, index.toString())
                    })}
            </Node>
        )
    }

    return nodes.map((node, index) => renderNode(node, index.toString(), true))
}

export default Tree
