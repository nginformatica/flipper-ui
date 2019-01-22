import { withStyles } from '@material-ui/core/styles'
import MuiTableCell from '@material-ui/core/TableCell'
import React, { ReactNode } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    children: ReactNode
    numeric?: boolean
    variant?: 'head' | 'body' | 'footer'
    classes: {
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

const TableCell: React.SFC<IProps> = ({
    style,
    margin,
    padding,
    children,
    classes,
    ...otherProps
}) =>
    <MuiTableCell
        { ...otherProps }
        style={ { padding, margin, ...style } }
        classes={ {
            head: classes.head,
            root: classes.root
        } }>
        { children }
    </MuiTableCell>

export default withStyles(styles)(TableCell)
