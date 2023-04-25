import { Avatar as MuiAvatar } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import React from 'react'
import type { DefaultProps } from '../../types'

export interface AvatarProps extends DefaultProps {
    name?: string
    id?: string
    sizes?: string
    src?: string
    imgProps?: object
    primary?: boolean
    children?: React.ReactNode
    'data-testid'?: string
}

const useStyles = makeStyles((theme: Theme) => {
    return createStyles({
        primary: {
            backgroundColor: theme.palette.primary.main
        }
    })
})

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
            className={`${className ? className : ''} ${
                primary ? classes['primary'] : ''
            }`}>
            {children}
        </MuiAvatar>
    )
}

export default Avatar
