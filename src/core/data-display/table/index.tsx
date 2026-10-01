import React from 'react'
import MuiTable from '@mui/material/Table'
import type { DefaultProps } from '../../types'
import type { TableProps } from '@mui/material/Table'
import { theme } from '@/theme'

const { gray } = theme.colors

// doubled ampersand so it also wins over TableCellInteractive's own `&&`
const SMALL_SIZE_SX = {
    '&& thead th, && tbody th, && tbody td': {
        fontSize: '13px',
        padding: '6px 12px'
    },
    // the pagination cell keeps its own padding of 0, so the footer shrinks
    // through the toolbar instead. 8px here plus the 4px below leave the last
    // icon 12px from the edge, the same inset the small cells use — and the
    // `footerActions` on the left get the same 12px
    '&& tfoot .MuiTablePagination-toolbar': {
        minHeight: '40px',
        paddingLeft: '8px',
        paddingRight: '8px'
    },
    // the labels are `p` elements, and their default `1em` margin is what
    // holds the toolbar above the 40px asked for above
    '&& tfoot .MuiTablePagination-selectLabel, && tfoot .MuiTablePagination-displayedRows':
        {
            margin: 0,
            fontSize: '13px'
        },
    '&& tfoot .MuiTablePagination-input': {
        fontSize: '13px',
        marginRight: '16px'
    },
    // the select arrow and the four page icons in one rule
    '&& tfoot .MuiSvgIcon-root': {
        fontSize: '18px'
    },
    '&& tfoot .MuiIconButton-root': {
        padding: '4px'
    },
    '&& thead .MuiTableSortLabel-icon': {
        fontSize: '14px'
    }
}

export interface ITableProps extends DefaultProps, Omit<TableProps, 'padding'> {
    spacing?: 'normal' | 'checkbox' | 'none'
}

const Table = ({
    style,
    margin,
    padding,
    spacing,
    children,
    ...otherProps
}: ITableProps) => (
    <MuiTable
        {...otherProps}
        padding={spacing}
        sx={[
            otherProps.size === 'small' && SMALL_SIZE_SX,
            ...(Array.isArray(otherProps.sx) ? otherProps.sx : [otherProps.sx])
        ]}
        style={{
            border: `1px solid ${gray[300]}`,
            padding,
            margin,
            ...style
        }}>
        {children}
    </MuiTable>
)

export default Table
