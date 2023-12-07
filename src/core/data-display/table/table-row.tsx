import MuiTableRow, {
    TableRowProps as MuiTableRowProps
} from '@material-ui/core/TableRow'
import React, { MouseEvent } from 'react'
import { background as backgroundColor } from '@/colors'
import { DefaultProps } from '../../types'

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
            borderColor: backgroundColor.light,
            margin,
            padding,
            ...style
        }}>
        {children}
    </MuiTableRow>
)

export default TableRow
