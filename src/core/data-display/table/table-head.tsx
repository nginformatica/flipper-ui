import React, { createContext } from 'react'
import MuiTableHead from '@mui/material/TableHead'
import type { DefaultProps } from '../../types'

export interface TableHeadProps extends DefaultProps, ISort {
    color?: string
}

enum Direction {
    ASCENDENT = 'asc',
    DESCENDENT = 'desc'
}

interface ISort {
    active?: string
    direction?: Direction
    onSort?(name: string): void
}

export const SortContext = createContext<ISort>({
    active: undefined,
    direction: Direction.ASCENDENT,
    onSort: undefined
})

const TableHead = ({
    style,
    margin,
    padding,
    children,
    color,
    active,
    direction,
    onSort,
    ...otherProps
}: TableHeadProps) => {
    return (
        <SortContext.Provider value={{ active, direction, onSort }}>
            <MuiTableHead
                {...otherProps}
                style={{ padding, margin, backgroundColor: color, ...style }}>
                {children}
            </MuiTableHead>
        </SortContext.Provider>
    )
}

export default TableHead
