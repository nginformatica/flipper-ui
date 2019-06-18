import { withStyles } from '@material-ui/core/styles'
import MuiTableCell, { TableCellProps } from '@material-ui/core/TableCell'
import React, { FC, ReactNode } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    numeric?: boolean
    variant?: 'head' | 'body' | 'footer'
    spacing?: TableCellProps['padding']
    children?: ReactNode | JSX.Element
    align?:
        | 'inherit'
        | 'left'
        | 'center'
        | 'right'
        | 'justify'
}

interface IClasses {
    classes?: {
        head: string
        root: string
    }
}

const styles = () => ({
    head: {
        color: 'inherit'
    },
    root: {
        borderColor: 'inherit'
    }
})

const TableCell: FC<TableCellProps & IClasses & IProps> = ({
    style,
    margin,
    padding,
    children,
    classes,
    spacing,
    ...otherProps
}) =>
    <MuiTableCell
        { ...otherProps }
        style={ { padding, margin, ...style } }
        padding={ spacing }
        classes={ {
            head: classes ? classes.head : undefined,
            root: classes ? classes.root : undefined
        } }>
        { children }
    </MuiTableCell>

export default withStyles(styles)(TableCell)
