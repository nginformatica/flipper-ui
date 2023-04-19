import React from 'react'
import styled from 'styled-components'
import { background, primary, transparent } from '../../colors'
import {
    KeyboardArrowDown as IconArrowDown,
    KeyboardArrowUp as IconArrowUp
} from '../../icons'
import { DefaultProps } from '../types'

export interface NodeProps extends DefaultProps {
    name: string
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
    padding-left: ${props => (props.inset ? '12px' : '48px')};
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

const Node = (props: NodeProps) => {
    const [open, setOpen] = React.useState(false)
    const { id, name, children, style = {}, className } = props

    const handleToggleOpen = () => {
        setOpen(!open)
    }

    const renderDropdownIcon = () => {
        return open ? (
            <IconArrowUp style={styles.icon} />
        ) : (
            <IconArrowDown style={styles.icon} />
        )
    }

    return (
        <Ul {...props} key={id || name} style={style} className={className}>
            <Li inset={Boolean(children)} onClick={handleToggleOpen}>
                {children && renderDropdownIcon()}
                {name}
            </Li>
            {open && children}
        </Ul>
    )
}

export default Node
