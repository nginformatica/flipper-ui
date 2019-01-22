import { Tabs as MuiTabs } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import React, { Component, ReactNode } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    centered?: boolean
    fullWidth?: boolean
    scrollable?: boolean
    value: string | number
    color?: 'default' | 'inherit' | 'primary' | 'secondary'
    classes: {
        default: string
        inherit: string
        primary: string
        secondary: string
        indicator: string
    }
    children?: ReactNode
    onChange?: (event: object, value: number) => void
}

const styles = theme => ({
    default: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary
    },
    indicator: {
        height: 0,
        opacity: 0,
        width: 0
    },
    inherit: {
        backgroundColor: 'inherit',
        color: 'inherit'
    },
    primary: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.contrastText
    },
    secondary: {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.secondary.contrastText
    }
})

class Tabs extends Component<IProps> {
    public static defaultProps = {
        centered: true,
        fullWidth: false,
        padding: '6px 0 0',
        scrollable: false
    }

    public render() {
        const {
            children,
            color = 'primary',
            className,
            classes,
            style,
            padding,
            margin,
            ...otherProps
        } = this.props

        return (
            <MuiTabs
                { ...otherProps }
                style={ { padding, margin, ...style } }
                className={ `${classes[color]} ${className}`}
                classes={ { indicator: classes.indicator } }>
                { children }
            </MuiTabs>
        )
    }
}

export default withStyles(styles)(Tabs)
