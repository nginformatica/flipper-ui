import React, { Component } from 'react'
import { evolve, not } from 'ramda'
import styled from 'styled-components'
import _ from 'prop-types'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { background, transparent, primary } from '../colors'

const styles = {
    icon: {
        fontSize: '24px',
        marginRight: '12px'
    }
}

const Ul = styled.ul`
    width: 350px;
`

const Li = styled.li`
    font-size: 16px;
    margin: 12px;
    background: ${transparent}
    padding: 12px;
    padding-left: ${props =>  props.inset ? '12px' : '48px'};
    list-style: none;
    border-radius: 6px;
    border: 1px solid ${background.dark};
    transition: all 500ms ease;
    cursor: pointer;
    align-items: center;
    display: flex;
    &:hover {
        background: ${background.light};
        border: 1px solid ${primary.normal};
    }
`

class Node extends Component {
    constructor(props) {
        super(props)
        this.state = { open: false }
    }

    handleToggleOpen() {
        this.setState(evolve({ open: not }))
    }

    renderDropdownIcon() {
        return this.state.open
            ? <MdKeyboardArrowUp style={ styles.icon } />
            : <MdKeyboardArrowDown style={ styles.icon } />
    }

    render() {
        const { open } = this.state
        const { id, name, children, style } = this.props

        return (
            <Ul
                key={ id || name }
                style={ style }>
                <Li
                    inset={ children }
                    onClick={ this.handleToggleOpen.bind(this) }>
                    { children && this.renderDropdownIcon() }
                    { name }
                </Li>
                { open && children }
            </Ul>
        )
    }
}

Node.propTypes = {
    id: _.number.isRequired,
    name: _.string.isRequired,
    style: _.object,
    children: _.node
}

export default Node