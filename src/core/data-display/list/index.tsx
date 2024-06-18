import React from 'react'
import MuiList from '@mui/material/List'
import MuiListHeader from '@mui/material/ListSubheader'
import type { DefaultProps } from '../../types'

export interface ListProps extends DefaultProps {
    title?: string
    dense?: boolean
    color?: 'default' | 'primary' | 'inherit'
}

const List = ({
    title,
    padding,
    margin,
    style = {},
    color = 'default',
    children,
    ...otherProps
}: ListProps) => {
    return (
        <MuiList
            subheader={
                title && <MuiListHeader color={color}>{title}</MuiListHeader>
            }
            style={{ padding, margin, ...style }}
            {...otherProps}>
            {children}
        </MuiList>
    )
}

export default List
