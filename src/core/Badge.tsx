import { Badge as MuiBadge } from '@material-ui/core'
import React, { Component } from 'react'

interface IProps {
    style?: object
    color?: 'default' | 'primary' | 'secondary' | 'error'
    counter: number | string
    children: React.ReactNode
    limit?: number
}

class Badge extends Component<IProps> {
    public static defaultProps = {
        color: 'primary'
    }

    public render() {
        const { children, counter, color, limit = 99, ...otherProps } = this.props

        return Boolean(counter)
            ? (
                <MuiBadge
                    badgeContent={
                        counter > limit
                            ? `+${limit}`
                            : counter
                    }
                    color={ color }
                    { ...otherProps }>
                    { children }
                </MuiBadge>
            )
            : children
    }
}

export default Badge
