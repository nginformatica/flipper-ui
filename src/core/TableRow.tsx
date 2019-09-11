import MuiTableRow, { TableRowProps } from '@material-ui/core/TableRow'
import React, { FC, MouseEvent } from 'react'
import { background as backgroundColor } from '../colors'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    selected?: boolean
    hover?: boolean
    background?: string
    onClick?: (event: MouseEvent<HTMLTableRowElement>) => void
}

const TableRow: FC<TableRowProps & IProps> = ({
    style,
    margin,
    padding,
    children,
    background,
    ...otherProps
}) =>
    <MuiTableRow
        { ...otherProps }
        style={ {
            background,
            borderColor: backgroundColor.light,
            margin,
            padding,
            ...style
        } }>
        { children }
    </MuiTableRow>

export default TableRow
