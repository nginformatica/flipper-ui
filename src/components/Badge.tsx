import { Badge as MuiBadge } from '@material-ui/core'
import React, { Component } from 'react'

interface IProps {
    style?: object
    color?: 'default' | 'primary' | 'secondary' | 'error'
    counter: number | string
    children: React.ReactNode
}

class Badge extends Component<IProps> {
    public static defaultProps = {
        color: 'primary',
        counter: 1
    }

    public render() {
        const { children, counter, color, ...otherProps } = this.props

        return Boolean(counter)
            ? (
                <MuiBadge
                    badgeContent={ counter > 99 ? '+99' : counter }
                    color={ color }
                    { ...otherProps }>
                    { children }
                </MuiBadge>
            )
            : children
    }
}

export default Badge
