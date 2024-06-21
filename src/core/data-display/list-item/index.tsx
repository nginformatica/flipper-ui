import React from 'react'
import type { MouseEvent } from 'react'
import MuiListItemAvatar from '@mui/material/ListItemAvatar'
import MuiListItemButton from '@mui/material/ListItemButton'
import MuiListItemIcon from '@mui/material/ListItemIcon'
import MuiListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'
import MuiListItemText from '@mui/material/ListItemText'
import MuiMenuItem from '@mui/material/MenuItem'
import { makeStyles } from '@mui/styles'
import type { DefaultProps } from '../../types'

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

const useStyles = makeStyles(() => ({
    root: {
        color: 'inherit',
        minHeight: '48px'
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
                        primary={props.title}
                        secondary={props.subtitle}
                        primaryTypographyProps={typographyProps}
                        secondaryTypographyProps={typographyProps}
                        data-testid={`list-item-${props.subtitle}`}
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
        <MuiMenuItem
            id={props.id}
            value={props.value}
            className={className}
            selected={props.selected}
            disabled={props.disabled}
            classes={{ root: classes.root }}
            style={{ padding, margin, ...style }}
            onClick={props.onClick}>
            {props.children}
        </MuiMenuItem>
    ) : (
        <MuiListItemButton
            id={props.id}
            className={className}
            selected={props.selected}
            disabled={props.disabled}
            classes={{ root: classes.root }}
            style={{ padding, margin, ...style }}
            onClick={props.onClick}>
            {renderCustomItem()}
        </MuiListItemButton>
    )
}

export default ListItem
