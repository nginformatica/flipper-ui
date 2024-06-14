import React from 'react'
import MuiTableBody from '@material-ui/core/TableBody'
import type { DefaultProps } from '@/core/types'

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
