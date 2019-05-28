import MuiTable from '@material-ui/core/Table'
import React, { FC } from 'react'
import { IDefault } from './Advertise'

const Table: FC<IDefault> = ({ style, margin, padding, children, ...otherProps }) =>
    <MuiTable
        { ...otherProps }
        style={ { padding, margin, ...style } }>
        { children }
    </MuiTable>

export default Table
