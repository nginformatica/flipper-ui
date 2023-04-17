import MuiTableBody from '@material-ui/core/TableBody'
import React from 'react'
import { DefaultProps } from '../types'

const TableBody = ({
    style,
    margin,
    padding,
    children,
    ...otherProps
}: DefaultProps) => (
    <MuiTableBody {...otherProps} style={{ padding, margin, ...style }}>
        {children}
    </MuiTableBody>
)

export default TableBody
