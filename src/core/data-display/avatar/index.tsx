import React from 'react'
import type { ReactNode } from 'react'
import { Avatar as MuiAvatar } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import type { DefaultProps } from '../../types'
import type { AvatarProps as MuiAvatarProps } from '@material-ui/core'
import type { Theme } from '@material-ui/core/styles'

export interface AvatarProps extends DefaultProps, MuiAvatarProps {
    /**
     * If true, the avatar will have a primary color background.
     */
    primary?: boolean
    children?: ReactNode
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
