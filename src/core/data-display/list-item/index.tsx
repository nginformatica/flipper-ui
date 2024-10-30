import React from 'react'
import type { MouseEvent } from 'react'
import MuiListItem from '@mui/material/ListItem'
import MuiListItemAvatar from '@mui/material/ListItemAvatar'
import MuiListItemButton from '@mui/material/ListItemButton'
import MuiListItemIcon from '@mui/material/ListItemIcon'
import MuiListItemText from '@mui/material/ListItemText'
import MuiMenuItem from '@mui/material/MenuItem'
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

const ListItem = (props: ListItemProps) => {
    const { padding, margin, style } = props

    const renderCustomItem = () => {
        const minWidth = props.title || props.subtitle ? '42px' : '0px'

        return (
            <>
                {props.avatar && (
                    <MuiListItemAvatar>{props.avatar}</MuiListItemAvatar>
                )}
                {props.icon && (
                    <MuiListItemIcon
                        style={{ minWidth }}
                        sx={{ color: 'inherit' }}>
                        {props.icon}
                    </MuiListItemIcon>
                )}
                {(props.title || props.subtitle) && (
                    <MuiListItemText
                        primary={props.title}
                        secondary={props.subtitle}
                        primaryTypographyProps={{ color: 'inherit' }}
                        secondaryTypographyProps={{ color: 'inherit' }}
                        data-testid={`list-item-${props.subtitle}`}
                    />
                )}
                {props.action && (
                    <MuiListItem
                        secondaryAction={props.action}
                        sx={{ width: 'auto', color: 'inherit' }}
                    />
                )}
            </>
        )
    }

    return props.children ? (
        <MuiMenuItem
            id={props.id}
            value={props.value}
            selected={props.selected}
            disabled={props.disabled}
            className={props.className}
            sx={{
                color: 'inherit',
                minHeight: '48px'
            }}
            style={{ padding, margin, ...style }}
            onClick={props.onClick}>
            {props.children}
        </MuiMenuItem>
    ) : (
        <MuiListItemButton
            id={props.id}
            selected={props.selected}
            disabled={props.disabled}
            className={props.className}
            sx={{
                color: 'inherit',
                minHeight: '48px'
            }}
            style={{ padding, margin, ...style }}
            onClick={props.onClick}>
            {renderCustomItem()}
        </MuiListItemButton>
    )
}

export default ListItem
