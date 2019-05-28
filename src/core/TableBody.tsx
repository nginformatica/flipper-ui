import MuiTableBody from '@material-ui/core/TableBody'
import React, { FC } from 'react'
import { IDefault } from './Advertise'

const TableBody: FC<IDefault> = ({
    style,
    margin,
    padding,
    children,
    ...otherProps
}) =>
    <MuiTableBody
        { ...otherProps }
        style={ { padding, margin, ...style } }>
        { children }
    </MuiTableBody>

export default TableBody
