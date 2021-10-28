import { evolve, not } from 'ramda'
import React, { Component } from 'react'
import styled from 'styled-components'
import { background, primary, transparent } from '../colors'
import {
    KeyboardArrowDown as IconArrowDown,
    KeyboardArrowUp as IconArrowUp
} from '../icons'
import { DefaultProps } from './types'

interface NodeProps extends DefaultProps {
    name: string
}

interface IState {
    open: boolean
}

interface IListItem {
    inset: boolean
}

const styles = {
    icon: {
        fontSize: '24px',
        marginRight: '12px'
    }
}

const Ul = styled.ul`
    width: 350px;
`

const Li = styled.li<IListItem>`
    font-size: 16px;
    margin: 12px;
    background: ${transparent};
    padding: 12px;
    padding-left: ${props => props.inset ? '12px' : '48px'};
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

class Node extends Component<NodeProps, IState> {
    constructor(props) {
        super(props)
        this.state = { open: false }
    }

    public handleToggleOpen() {
        this.setState(evolve({ open: not }))
    }

    public renderDropdownIcon() {
        return this.state.open
            ? <IconArrowUp style={ styles.icon } />
            : <IconArrowDown style={ styles.icon } />
    }

    public render() {
        const { open } = this.state
        const { id, name, children, style = {}, className } = this.props

        return (
            <Ul
                key={ id || name }
                style={ style }
                className={ className }>
                <Li
                    inset={ Boolean(children) }
                    onClick={ this.handleToggleOpen.bind(this) }>
                    { children && this.renderDropdownIcon() }
                    { name }
                </Li>
                { open && children }
            </Ul>
        )
    }
}

export default Node
