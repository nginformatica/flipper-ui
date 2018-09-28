import {
    ListItem as MuiListItem,
    ListItemAvatar as MuiListItemAvatar,
    ListItemIcon as MuiListItemIcon,
    ListItemSecondaryAction as MuiListItemSecondaryAction,
    ListItemText as MuiListItemText,
    MenuItem as MuiMenuItem
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import React, { Component, Fragment, MouseEvent } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    avatar?: React.ReactElement<any>
    icon?: React.ReactElement<any>
    action?: React.ReactElement<any>
    name?: string
    title?: string
    subtitle?: string
    value?: string | number
    children?: React.ReactNode
    classes: { default: string }
    onClick?: (event?: MouseEvent) => {}
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
            avatar,
            icon,
            title,
            subtitle,
            classes
        } = this.props
        const iconMargin = title || subtitle ? '16px' : '0px'
        const className = classes.default

        return (
            <Fragment>
                {
                    avatar && (
                        <MuiListItemAvatar>
                            { avatar }
                        </MuiListItemAvatar>
                    )
                }
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
                    (title || subtitle) && (
                        <MuiListItemText
                            primaryTypographyProps={ { className } }
                            secondaryTypographyProps={ { className } }
                            primary={ title }
                            secondary={ subtitle }
                        />
                    )
                }
                {
                    action && (
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
                onClick={ this.props.onClick }>
                { children ? children : this.renderCustomItem() }
            </MuiListItem>
        )
    }
}

export default withStyles(styles)(ListItem)
