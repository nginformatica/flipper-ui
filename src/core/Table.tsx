import MuiTable, { TableProps } from '@material-ui/core/Table'
import React, { FC } from 'react'
import { IDefault } from './Advertise'
import { background } from '../colors'

interface IProps extends IDefault {
    spacing?: TableProps['padding']
}

const Table: FC<TableProps & IProps> =
    ({ style, margin, padding, spacing, children, ...otherProps }) =>
        <MuiTable
            { ...otherProps }
            padding={ spacing }
            style={ {
                border: `1px solid ${background.light}`,
                padding,
                margin,
                ...style
            } }>
            { children }
        </MuiTable>

export default Table
