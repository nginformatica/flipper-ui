import {
    ListItem as MuiListItem,
    ListItemAvatar as MuiListItemAvatar,
    ListItemIcon as MuiListItemIcon,
    ListItemSecondaryAction as MuiListItemSecondaryAction,
    ListItemText as MuiListItemText
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import React, {
    Component,
    Fragment,
    MouseEvent,
    ReactNode
} from 'react'
import { IDefault } from './Advertise'
import { Typography } from '..'

interface IProps extends IDefault {
    avatar?: JSX.Element
    icon?: JSX.Element
    action?: JSX.Element
    title?: string
    subtitle?: string
    value?: string | number
    children?: ReactNode
    classes: { default: string }
    selected?: boolean
    onClick?: (event?: MouseEvent) => void
}

const styles = () => ({
    default: {
        color: 'inherit'
    }
})

class ListItem extends Component<IProps, {}> {

    private renderChildren () {
        return(
            typeof this.props.children === 'string'
                ? (
                    <Typography>
                        { this.props.children }
                    </Typography>
                )
                : this.props.children
        )
    }

    private renderCustomItem() {
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
        const {
            id,
            className,
            children,
            value,
            style = {},
            padding,
            margin,
            name,
            selected,
            onClick
        } = this.props

        return (
            <MuiListItem
                button
                value={ value }
                name={ name }
                id={ id }
                style={ { padding, margin, ...style } }
                className={ className }
                selected={ selected }
                onClick={ onClick }>
                { children ? this.renderChildren() : this.renderCustomItem() }
            </MuiListItem>
        )
    }
}

export default withStyles(styles)(ListItem)
