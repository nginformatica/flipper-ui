import React from 'react'
import MuiTableBody from '@mui/material/TableBody'
import type { DefaultProps } from '../../types'

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
