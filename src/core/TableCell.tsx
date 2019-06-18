import MuiTableCell, { TableCellProps } from '@material-ui/core/TableCell'
import React, { FC } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    numeric?: boolean
    variant?: 'head' | 'body' | 'footer'
    spacing?: TableCellProps['padding']
    align?:
        | 'inherit'
        | 'left'
        | 'center'
        | 'right'
        | 'justify'
}

const TableCell: FC<TableCellProps & IProps> = ({
    style,
    margin,
    padding,
    children,
    spacing,
    ...otherProps
}) =>
    <MuiTableCell
        { ...otherProps }
        style={ { padding, margin, ...style } }
        padding={ spacing }>
        { children }
    </MuiTableCell>

export default TableCell
