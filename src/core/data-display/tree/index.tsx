import { omit } from 'ramda'
import React from 'react'
import Node from '../node'

export interface INode {
    id: string | number
    name: string
    nodes?: INode[]
}

export interface TreeProps {
    nodes?: INode[]
}

export const Tree = ({ nodes = [], ...otherProps }: TreeProps): JSX.Element => {
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
        <Node {...otherProps} name='root'>
            {nodes.map((node, index) =>
                renderNode(node, index.toString(), true)
            )}
        </Node>
    )
}

export default Tree
