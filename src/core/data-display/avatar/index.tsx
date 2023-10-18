import {
    Avatar as MuiAvatar,
    AvatarProps as MuiAvatarProps
} from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import React from 'react'
import type { DefaultProps } from '../../types'

export interface AvatarProps extends DefaultProps, MuiAvatarProps {
    /**
     * If true, the avatar will have a primary color background.
     */
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

export const Avatar = ({
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
