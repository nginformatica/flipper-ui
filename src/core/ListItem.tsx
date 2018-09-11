import {
    ListItem as MuiListItem,
    ListItemIcon as MuiListItemIcon,
    ListItemSecondaryAction as MuiListItemSecondaryAction,
    ListItemText as MuiListItemText
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import React, { Component, Fragment } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    icon?: React.ReactElement<any>
    action?: React.ReactElement<any>
    name?: string
    title?: string
    subtitle?: string
    iconOnly?: boolean
    value?: string | number
    children?: React.ReactNode
    classes: { default: string }
    onClick?: (name) => {}
}

const styles = () => ({
    default: {
        color: 'inherit'
    }
})

class ListItem extends Component<IProps, {}> {
    public renderCustomItem() {
        const {
            action,
            icon,
            title,
            subtitle,
            iconOnly,
            classes
        } = this.props
        const iconMargin = iconOnly || !(title || subtitle) ? '0px' : '24px'
        const className = classes.default

        return (
            <Fragment>
                {
                    icon && (
                        <MuiListItemIcon
                            className={ className }
                            style={ { marginRight: iconMargin } }>
                            { icon }
                        </MuiListItemIcon>
                    )
                }
                {
                    !iconOnly && (title || subtitle) && (
                        <MuiListItemText
                            primaryTypographyProps={ { className } }
                            secondaryTypographyProps={ { className } }
                            primary={ title }
                            secondary={ subtitle }
                        />
                    )
                }
                {
                    !iconOnly && action && (
                        <MuiListItemSecondaryAction className={ className }>
                            { action }
                        </MuiListItemSecondaryAction>
                    )
                }
            </Fragment>
        )
    }

    public render() {
        const { className, children, value, style = {}, padding, margin, onClick } = this.props

        return (
            <MuiListItem
                button
                value={ value }
                style={ { padding, margin, ...style } }
                className={ className }
                onClick={ () => onClick!(name) }>
                { children ? children : this.renderCustomItem() }
            </MuiListItem>
        )
    }
}

export default withStyles(styles)(ListItem)
