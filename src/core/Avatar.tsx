import { Avatar as MuiAvatar } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import React, { FC } from 'react'
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
}

const styles = theme => ({
    primary: {
        backgroundColor: theme.palette.primary.main
    }
})

const Avatar: FC<IProps> = ({
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
