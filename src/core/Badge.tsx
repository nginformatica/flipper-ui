import { Badge as MuiBadge } from '@material-ui/core'
import React, { Component } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    color?: 'default' | 'primary' | 'secondary' | 'error'
    counter: number | string
    children: React.ReactNode
    limit?: number
}

class Badge extends Component<IProps, {}> {
    public static defaultProps = {
        color: 'primary',
        limit: 99
    }

    public render() {
        const {
            children,
            counter,
            color,
            limit = 99,
            padding,
            margin,
            style = {},
            ...otherProps
        } = this.props

        return Boolean(counter)
            ? (
                <MuiBadge
                    badgeContent={
                        counter > limit
                            ? `+${limit}`
                            : counter
                    }
                    color={ color }
                    style={ { padding, margin, ...style } }
                    { ...otherProps }>
                    { children }
                </MuiBadge>
            )
            : children
    }
}

export default Badge
