import { Badge as MuiBadge } from '@material-ui/core'
import React, { FC } from 'react'
import { IDefault } from './Advertise'
import { BadgeProps } from '@material-ui/core/Badge'
import { makeStyles } from '@material-ui/styles'

interface IProps extends IDefault, BadgeProps {
    max?: number
    counter: number | string
    position?: {
        top?: number
        bottom?: number
        left?: number
        right?: number
    }
}

const useBadgeStyles = (position: IProps['position']) => {
    const getStyles = makeStyles({
        badge: {
            ...position
        }
    })

    return getStyles()
}

const Badge: FC<IProps> = props => {
    const {
        children,
        counter,
        padding,
        margin,
        position,
        style = {},
        ...otherProps
    } = props

    const classes = useBadgeStyles(position)

    return counter
        ? (
            <MuiBadge
                badgeContent={ counter }
                classes={ classes }
                style={ { padding, margin, ...style } }
                color='primary'
                { ...otherProps }>
                { children }
            </MuiBadge>
        )
        : <>{ children }</>
}

Badge.defaultProps = {
    color: 'primary'
}

export default Badge
