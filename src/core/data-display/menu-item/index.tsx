import React from 'react'
import type { MouseEvent, MutableRefObject } from 'react'
import { MenuItem as MuiMenuItem } from '@mui/material'
import { styled } from 'styled-components'
import type { DefaultProps } from '@/core/types'
import type { MenuItemClassKey } from '@material-ui/core/MenuItem'
import type { ClassNameMap } from '@material-ui/core/styles/withStyles'
import type { Omit } from 'ramda'

export interface ListItemProps extends Omit<DefaultProps, 'name'> {
    title?: string
    value?: string | number
    selected?: boolean
    disabled?: boolean
    onClick?: (event?: MouseEvent) => void
    children?: string
    ref?: MutableRefObject<null>
    classes?: Partial<ClassNameMap<MenuItemClassKey>> | undefined
}

const MenuItems = styled(MuiMenuItem)`
    && {
        outline: none;
        cursor: pointer;
        font-family: Roboto, Helvetica, Arial, sans-serif;

        &:hover {
            background-color: #e0e0e0;
        }
    }
`

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
