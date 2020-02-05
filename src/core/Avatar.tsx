import { Avatar as MuiAvatar } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import React, { FC } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    name?: string
    id?: string
    sizes?: string
    src?: string
    imgProps?: object
    primary?: boolean
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        primary: {
            backgroundColor: theme.palette.primary.main
        }
    })
)

const Avatar: FC<IProps> = ({
    children,
    primary,
    className,
    ...otherProps
}) => {
    const classes = useStyles()

    return (
        <MuiAvatar
            { ...otherProps }
            className={ `${className} ${primary ? classes['primary'] : ''}` }>
            { children }
        </MuiAvatar>
    )
}

export default Avatar
