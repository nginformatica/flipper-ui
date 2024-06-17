import React from 'react'
import type { MouseEvent } from 'react'
import {
    ListItem as MuiListItem,
    ListItemAvatar as MuiListItemAvatar,
    ListItemIcon as MuiListItemIcon,
    ListItemSecondaryAction as MuiListItemSecondaryAction,
    ListItemText as MuiListItemText,
    MenuItem
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import type { DefaultProps } from '../../types'
import type { Theme } from '@material-ui/core'

export interface ListItemProps extends Omit<DefaultProps, 'name'> {
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

const ListItem = (props: ListItemProps) => {
    const { padding, margin, style } = props
    const classes = useStyles()
    const className = props.className

    const renderCustomItem = () => {
        const minWidth = props.title || props.subtitle ? '42px' : '0px'
        const className = classes.default
        const typographyProps = { className }

        return (
            <>
                {props.avatar && (
                    <MuiListItemAvatar>{props.avatar}</MuiListItemAvatar>
                )}
                {props.icon && (
                    <MuiListItemIcon className={className} style={{ minWidth }}>
                        {props.icon}
                    </MuiListItemIcon>
                )}
                {(props.title || props.subtitle) && (
                    <MuiListItemText
                        primaryTypographyProps={typographyProps}
                        secondaryTypographyProps={typographyProps}
                        data-testid={`list-item-${props.subtitle}`}
                        primary={props.title}
                        secondary={props.subtitle}
                        style={props.action ? { marginRight: '36px' } : {}}
                    />
                )}
                {props.action && (
                    <MuiListItemSecondaryAction className={className}>
                        {props.action}
                    </MuiListItemSecondaryAction>
                )}
            </>
        )
    }

    return props.children ? (
        <MenuItem
            button
            id={props.id}
            style={{ padding, margin, ...style }}
            className={className}
            classes={{ root: classes.root }}
            selected={props.selected}
            disabled={props.disabled}
            value={props.value}
            onClick={props.onClick}>
            {props.children}
        </MenuItem>
    ) : (
        <MuiListItem
            button
            id={props.id}
            style={{ padding, margin, ...style }}
            className={className}
            classes={{ root: classes.root }}
            selected={props.selected}
            disabled={props.disabled}
            onClick={props.onClick}>
            {renderCustomItem()}
        </MuiListItem>
    )
}

export default ListItem
