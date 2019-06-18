import MuiTableCell, { TableCellProps } from '@material-ui/core/TableCell'
import React, { FC } from 'react'
import { IDefault } from './Advertise'
import { Omit } from 'ramda'

interface IProps extends IDefault {
    numeric?: boolean
    variant?: 'head' | 'body' | 'footer'
    spacing?: TableCellProps['padding']
    padding?: number | string
    align?:
        | 'inherit'
        | 'left'
        | 'center'
        | 'right'
        | 'justify'
}

const TableCell: FC<Omit<TableCellProps, 'padding'> & IProps> = ({
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
