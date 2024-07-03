import React from 'react'
import type { MouseEvent, MutableRefObject, ReactNode } from 'react'
import MuiMenuItem from '@mui/material/MenuItem'
import type { DefaultProps } from '../../types'

export interface MenuItemProps extends Omit<DefaultProps, 'name'> {
    title?: string
    value?: string | number
    selected?: boolean
    disabled?: boolean
    onClick?: (event?: MouseEvent) => void
    children?: string | ReactNode
    ref?: MutableRefObject<null>
}

const MenuItem = (props: MenuItemProps) => {
    const { padding, margin, style } = props

    return (
        <MuiMenuItem
            ref={null}
            id={props.id}
            title={props.title}
            style={{ padding, margin, ...style }}
            selected={props.selected}
            disabled={props.disabled}
            value={props.value}
            onClick={props.onClick}>
            {props.children}
        </MuiMenuItem>
    )
}

export default MenuItem
