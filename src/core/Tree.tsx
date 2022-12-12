import { omit } from 'ramda'
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
const Tree = ({ nodes = [] }: TreeProps): JSX.Element => {
    const renderNode = (
        node: INode,
        index: string,
        root = false
    ): React.ReactNode => {
        const { id, name, nodes } = node

        return (
            <Node
                id={index}
                name={name}
                key={id || index}
                style={root ? { padding: 0 } : {}}>
                {nodes &&
                    nodes.map(node => {
                        return renderNode(
                            omit(['array'], node),
                            index.toString()
                        )
                    })}
            </Node>
        )
    }

    return (
        <Node name='root'>
            {nodes.map((node, index) =>
                renderNode(node, index.toString(), true)
            )}
        </Node>
    )
}

export default Tree
