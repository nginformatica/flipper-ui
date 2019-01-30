import {
    Avatar as MuiAvatar,
    withStyles
} from '@material-ui/core'
import React, { ReactNode, SFC } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    name?: string
    id?: string
    sizes?: string
    src?: string
    imgProps?: object
    primary?: boolean
    classes: {
        primary: string
    }
    children: ReactNode
}

const styles = theme => ({
    primary: {
        backgroundColor: theme.palette.primary.main
    }
})

const Avatar: SFC<IProps> = ({
    children,
    primary,
    className,
    classes,
    ...otherProps
}) =>
    <MuiAvatar
        { ...otherProps }
        className={ `${className} ${primary ? classes.primary : ''}` }>
        { children }
    </MuiAvatar>

export default withStyles(styles)(Avatar)
