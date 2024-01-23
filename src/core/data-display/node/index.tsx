import React, { useState } from 'react'
import { styled } from 'styled-components'
import type { DefaultProps } from '@/core/types'
import {
    KeyboardArrowDown as IconArrowDown,
    KeyboardArrowUp as IconArrowUp
} from '@/icons'
import { theme } from '@/theme'

const { grays } = theme.colors

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
    background: #ffffff00;
    padding: 12px;
    padding-left: ${props => (props.inset ? '12px' : '48px')};
    list-style: none;
    border-radius: 6px;
    border: 1px solid ${grays.g5};
    transition: all 500ms ease;
    cursor: pointer;
    align-items: center;
    display: flex;
    &:hover {
        background: ${grays.g7};
        border: 1px solid #009688;
    }
`

export const Node = (props: NodeProps) => {
    const [open, setOpen] = useState(false)
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
