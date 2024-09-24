import React from 'react'
import type { MouseEvent } from 'react'
import MuiTableRow from '@mui/material/TableRow'
import type { DefaultProps } from '../../types'
import type { TableRowProps } from '@mui/material/TableRow'
import { theme } from '@/theme'

const { gray } = theme.colors

export interface ITableRowProps extends DefaultProps, TableRowProps {
    selected?: boolean
    hover?: boolean
    background?: string
    onClick?: (event: MouseEvent<HTMLTableRowElement>) => void
}

const TableRow = ({
    style,
    margin,
    padding,
    children,
    background,
    ...otherProps
}: ITableRowProps) => (
    <MuiTableRow
        {...otherProps}
        style={{
            background,
            borderColor: gray[200],
            margin,
            padding,
            ...style
        }}>
        {children}
    </MuiTableRow>
)

export default TableRow
