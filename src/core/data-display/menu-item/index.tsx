import React, { MouseEvent } from 'react'
import { DefaultProps } from '../../types'
import { Omit } from 'ramda'
import styled from 'styled-components'
import { MenuItem as MuiMenuItem } from '@mui/material'
import { MenuItemClassKey } from '@material-ui/core/MenuItem'
import { ClassNameMap } from '@material-ui/core/styles/withStyles'

export interface ListItemProps extends Omit<DefaultProps, 'name'> {
    title?: string
    value?: string | number
    selected?: boolean
    disabled?: boolean
    onClick?: (event?: MouseEvent) => void
    children?: string
    ref?: React.MutableRefObject<null>
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
