import MuiTableRow, {
    TableRowProps as MuiTableRowProps
} from '@material-ui/core/TableRow'
import React, { FC, MouseEvent } from 'react'
import { background as backgroundColor } from '../colors'
import { DefaultProps } from './types'

interface TableRowProps extends DefaultProps {
    selected?: boolean
    hover?: boolean
    background?: string
    onClick?: (event: MouseEvent<HTMLTableRowElement>) => void
}

const TableRow: FC<MuiTableRowProps & TableRowProps> = ({
    style,
    margin,
    padding,
    children,
    background,
    ...otherProps
}) => (
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
