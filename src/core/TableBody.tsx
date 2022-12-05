import MuiTableBody from '@material-ui/core/TableBody'
import React, { FC } from 'react'
import { DefaultProps } from './types'

const TableBody: FC<DefaultProps> = ({
    style,
    margin,
    padding,
    children,
    ...otherProps
}) => (
    <MuiTableBody {...otherProps} style={{ padding, margin, ...style }}>
        {children}
    </MuiTableBody>
)

export default TableBody
