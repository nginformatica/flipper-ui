import React from 'react'
import MuiList from '@mui/material/List'
import MuiListHeader from '@mui/material/ListSubheader'
import type { DefaultProps } from '../../types'
import { theme } from '@/theme'

const { neutral } = theme.colors

export interface ListProps extends DefaultProps {
    title?: string
    dense?: boolean
    color?: 'default' | 'inherit'
}

const List = ({
    title,
    padding,
    margin,
    style = {},
    children,
    ...otherProps
}: ListProps) => {
    return (
        <MuiList
            subheader={
                title && (
                    <MuiListHeader
                        sx={{
                            backgroundColor: neutral[100]
                        }}>
                        {title}
                    </MuiListHeader>
                )
            }
            style={{ padding, margin, ...style }}
            sx={{
                backgroundColor: neutral[100]
            }}
            {...otherProps}>
            {children}
        </MuiList>
    )
}

export default List
