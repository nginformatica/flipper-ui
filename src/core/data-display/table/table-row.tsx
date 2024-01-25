import type { MouseEvent } from 'react'
import React from 'react'
import MuiTableRow from '@material-ui/core/TableRow'
import type { DefaultProps } from '../../types'
import type { TableRowProps as MuiTableRowProps } from '@material-ui/core/TableRow'
import { theme } from '@/theme'

const { grays } = theme.colors

export interface TableRowProps extends DefaultProps {
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
}: MuiTableRowProps & TableRowProps) => (
    <MuiTableRow
        {...otherProps}
        style={{
            background,
            borderColor: grays.g7,
            margin,
            padding,
            ...style
        }}>
        {children}
    </MuiTableRow>
)

export default TableRow
