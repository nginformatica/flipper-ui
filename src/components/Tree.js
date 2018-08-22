import React, { Component } from 'react'
import _ from 'prop-types'
import Node from './Node'

class Tree extends Component {
    renderNode(node, index, root = false) {
        const { id, name, nodes } = node

        return (
            <Node
                id={ index }
                name={ name }
                key={ id || index }
                style={ root ? { padding: 0 } :  {} }>
                { nodes && nodes.map((node, index) => this.renderNode(node, index)) }
            </Node>
        )
    }

    render() {
        return this.props.nodes.map((node, index) =>
            this.renderNode(node, index, true)
        )
    }
}

Tree.propTypes = {
    nodes: _.array
}

export default Tree