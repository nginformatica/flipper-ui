import {
    ListItem as MuiListItem,
    ListItemAvatar as MuiListItemAvatar,
    ListItemIcon as MuiListItemIcon,
    ListItemSecondaryAction as MuiListItemSecondaryAction,
    ListItemText as MuiListItemText,
    MenuItem
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import React, {
    Component,
    Fragment,
    MouseEvent
} from 'react'
import { IDefault } from './Advertise'
import Typography from './Typography'
import { Omit } from 'ramda'

interface IProps extends Omit<IDefault, 'name'> {
    avatar?: JSX.Element
    icon?: JSX.Element
    action?: JSX.Element
    title?: string | JSX.Element
    subtitle?: string | JSX.Element
    value?: string | number
    classes: { default: string }
    selected?: boolean
    disabled?: boolean
    onClick?: (event?: MouseEvent) => void
}

const styles = () => ({
    default: {
        color: 'inherit'
    }
})

class ListItem extends Component<IProps, {}> {

    private renderChildren () {
        return (
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
        const minWidth = title || subtitle ? '42px' : '0px'
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
                            style={ { minWidth } }>
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
                            style={ action ? { marginRight: '36px' } : {} }
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
            selected,
            disabled,
            onClick
        } = this.props

        return children
            ? (
                <MenuItem
                    button
                    id={ id }
                    style={ { padding, margin, ...style } }
                    className={ className }
                    selected={ selected }
                    disabled={ disabled }
                    value={ value }
                    onClick={ onClick }>
                    { this.renderChildren() }
                </MenuItem>
            )
            : (
                <MuiListItem
                    button
                    id={ id }
                    style={ { padding, margin, ...style } }
                    className={ className }
                    selected={ selected }
                    disabled={ disabled }
                    onClick={ onClick }>
                    { this.renderCustomItem() }
                </MuiListItem>
            )
    }
}

export default withStyles(styles)(ListItem)
