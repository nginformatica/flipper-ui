import React from 'react'
import MuiTableFooter from '@mui/material/TableFooter'
import type { DefaultProps } from '../../types'
import type { TableFooterProps } from '@mui/material/TableFooter'
import { theme } from '@/theme'

const { grays } = theme.colors

export interface ITableFooterProps extends DefaultProps, TableFooterProps {}

const TableFooter = ({
    style,
    margin,
    padding,
    children
}: ITableFooterProps) => (
    <MuiTableFooter
        style={{
            borderColor: grays.g7,
            margin,
            padding,
            ...style
        }}>
        {children}
    </MuiTableFooter>
)

export default TableFooter
