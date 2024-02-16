import React, { useState } from 'react'
import type { DefaultProps } from '../../types'
import { IconDown, IconUp, List, ListItem } from './styles'

export interface NodeProps extends DefaultProps {
    name: string
}

const Node = (props: NodeProps) => {
    const [open, setOpen] = useState(false)
    const { id, name, children, style = {}, className } = props

    const handleToggleOpen = () => {
        setOpen(!open)
    }

    const renderDropdownIcon = () => {
        return open ? <IconUp /> : <IconDown />
    }

    return (
        <List {...props} key={id || name} style={style} className={className}>
            <ListItem inset={Boolean(children)} onClick={handleToggleOpen}>
                {children && renderDropdownIcon()}
                {name}
            </ListItem>
            {open && children}
        </List>
    )
}

export default Node
