import { withStyles } from '@material-ui/core/styles'
import MuiTableHead from '@material-ui/core/TableHead'
import React, { FC, createContext } from 'react'
import { DefaultProps } from './types'

interface TableHeadProps extends DefaultProps, ISort {
    color?: 'primary' | 'secondary' | 'default' | 'inherit'
    classes: {
        default: string
        inherit: string
        primary: string
        secondary: string
    }
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

const styles = (theme: {
    palette: {
        background: { default: string }
        primary: { main: string }
        secondary: { main: string }
    }
}) => ({
    default: {
        color: theme.palette.background.default
    },
    inherit: {
        color: 'inherit'
    },
    primary: {
        color: theme.palette.primary.main
    },
    secondary: {
        color: theme.palette.secondary.main
    }
})

export const SortContext = createContext<ISort>({
    active: undefined,
    direction: Direction.ASCENDENT,
    onSort: undefined
})

const TableHead: FC<TableHeadProps> = ({
    style,
    margin,
    padding,
    children,
    color,
    classes,
    active,
    direction,
    onSort,
    ...otherProps
}) => (
    <SortContext.Provider value={{ active, direction, onSort }}>
        <MuiTableHead
            {...otherProps}
            style={{ padding, margin, ...style }}
            classes={
                color
                    ? {
                          root: classes[color]
                      }
                    : {}
            }>
            {children}
        </MuiTableHead>
    </SortContext.Provider>
)

export default withStyles(styles)(TableHead)
