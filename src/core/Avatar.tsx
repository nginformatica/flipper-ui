import { Avatar as MuiAvatar } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import React from 'react'
import type { DefaultProps } from './types'

interface AvatarProps extends DefaultProps {
    name?: string
    id?: string
    sizes?: string
    src?: string
    imgProps?: object
    primary?: boolean
    children: React.ReactNode
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        primary: {
            backgroundColor: theme.palette.primary.main
        }
    })
)

const Avatar = ({
    children,
    primary,
    className,
    ...otherProps
}: AvatarProps) => {
    const classes = useStyles()

    return (
        <MuiAvatar
            {...otherProps}
            className={`${className} ${primary ? classes['primary'] : ''}`}>
            {children}
        </MuiAvatar>
    )
}

export default Avatar
