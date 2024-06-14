import React from 'react'
import type { MouseEvent, MutableRefObject, ReactNode } from 'react'
import type { DefaultProps } from '@/core/types'
import { MenuItems } from './styles'

export interface ListItemProps extends Omit<DefaultProps, 'name'> {
    title?: string
    value?: string | number
    selected?: boolean
    disabled?: boolean
    onClick?: (event?: MouseEvent) => void
    children?: string | ReactNode
    ref?: MutableRefObject<null>
}

const MenuItem = (props: ListItemProps) => {
    const { padding, margin, style } = props

    return (
        <MenuItems
            id={props.id}
            title={props.title}
            style={{ padding, margin, ...style }}
            selected={props.selected}
            disabled={props.disabled}
            value={props.value}
            onClick={props.onClick}>
            {props.children}
        </MenuItems>
    )
}

export default MenuItem
