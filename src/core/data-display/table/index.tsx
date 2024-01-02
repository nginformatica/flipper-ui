import MuiTable, { TableProps as MuiTableProps } from '@material-ui/core/Table'
import React from 'react'
import { DefaultProps } from '../../types'
import { theme } from '@/theme'

const { grays } = theme.colors

export interface TableProps
    extends DefaultProps,
        Omit<MuiTableProps, 'padding'> {
    spacing?: MuiTableProps['padding']
}

export const Table = ({
    style,
    margin,
    padding,
    spacing,
    children,
    ...otherProps
}: MuiTableProps & TableProps) => (
    <MuiTable
        {...otherProps}
        padding={spacing}
        style={{
            border: `1px solid ${grays.g6}`,
            padding,
            margin,
            ...style
        }}>
        {children}
    </MuiTable>
)

export default Table
