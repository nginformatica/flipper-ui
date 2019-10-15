import {
    ListItem as MuiListItem,
    ListItemAvatar as MuiListItemAvatar,
    ListItemIcon as MuiListItemIcon,
    ListItemSecondaryAction as MuiListItemSecondaryAction,
    ListItemText as MuiListItemText,
    MenuItem,
    Theme
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, {
    Fragment,
    MouseEvent,
    FC
} from 'react'
import { IDefault } from './Advertise'
import { Omit } from 'ramda'

interface IProps extends Omit<IDefault, 'name'> {
    avatar?: JSX.Element
    icon?: JSX.Element
    action?: JSX.Element
    title?: string | JSX.Element
    subtitle?: string | JSX.Element
    value?: string | number
    selected?: boolean
    disabled?: boolean
    onClick?: (event?: MouseEvent) => void
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        ...theme.typography.body2,
        [theme.breakpoints.up('sm')]: {
            minHeight: '48px'
        },
        color: 'inherit'
    },
    default: {
        color: 'inherit'
    }
}))

const ListItem: FC<IProps> = props => {
    const { padding, margin, style } = props
    const classes = useStyles()
    const className = props.className

    const renderCustomItem = () => {
        const minWidth = props.title || props.subtitle ? '42px' : '0px'
        const className = classes.default

        return (
            <Fragment>
                {
                    props.avatar && (
                        <MuiListItemAvatar>
                            { props.avatar }
                        </MuiListItemAvatar>
                    )
                }
                {
                    props.icon && (
                        <MuiListItemIcon
                            className={ className }
                            style={ { minWidth } }>
                            { props.icon }
                        </MuiListItemIcon>
                    )
                }
                {
                    (props.title || props.subtitle) && (
                        <MuiListItemText
                            primaryTypographyProps={ { className } }
                            secondaryTypographyProps={ { className } }
                            primary={ props.title }
                            secondary={ props.subtitle }
                            style={ props.action ? { marginRight: '36px' } : {} }
                        />
                    )
                }
                {
                    props.action && (
                        <MuiListItemSecondaryAction className={ className }>
                            { props.action }
                        </MuiListItemSecondaryAction>
                    )
                }
            </Fragment>
        )
    }

    return props.children
        ? (
            <MenuItem
                button
                id={ props.id }
                style={ { padding, margin, ...style } }
                className={ className }
                classes={ { root: classes.root } }
                selected={ props.selected }
                disabled={ props.disabled }
                value={ props.value }
                onClick={ props.onClick }>
                { props.children }
            </MenuItem>
        )
        : (
            <MuiListItem
                button
                id={ props.id }
                style={ { padding, margin, ...style } }
                className={ className }
                classes={ { root: classes.root } }
                selected={ props.selected }
                disabled={ props.disabled }
                onClick={ props.onClick }>
                { renderCustomItem() }
            </MuiListItem>
        )
}

export default ListItem
