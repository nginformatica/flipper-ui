import { Tabs as MuiTabs } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import React, { Component, ReactNode } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    centered?: boolean
    value: string | number
    color?: 'default' | 'inherit' | 'primary' | 'secondary'
    variant?: 'standard' | 'scrollable' | 'fullWidth'
    children?: ReactNode
    onChange?: (event: object, value: number) => void
}

interface IClasses {
    classes?: {
        default: string
        inherit: string
        primary: string
        secondary: string
        indicator: string
    }
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

class Tabs extends Component<IProps & IClasses> {
    public static defaultProps = {
        centered: true,
        padding: '6px 0 0'
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
            variant = 'standard',
            ...otherProps
        } = this.props

        return (
            <MuiTabs
                { ...otherProps }
                variant={ variant }
                style={ { padding, margin, ...style } }
                className={ classes ? `${classes[color]} ${className}` : '' }
                classes={ classes ? { indicator: classes.indicator } : {} }>
                { children }
            </MuiTabs>
        )
    }
}

export default withStyles(styles)(Tabs)
