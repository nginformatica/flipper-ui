import {
    Avatar as MuiAvatar,
    createStyles,
    withStyles,
    WithStyles
} from '@material-ui/core'
import React from 'react'

interface IProps {
    style?: object
    sizes?: string
    src?: string
    imgProps?: object
    primary?: boolean
    classes: {
        primary: string
    }
    children: React.ReactNode
}

const styles = theme => createStyles({
    primary: {
        backgroundColor: theme.palette.primary.main
    }
})

const Avatar = ({ children, primary, classes, ...otherProps }: IProps) =>
    <MuiAvatar
        { ...otherProps }
        className={ primary ? classes.primary : '' }>
        { children }
    </MuiAvatar>

export default withStyles(styles)(Avatar)
