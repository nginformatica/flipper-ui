import React from 'react'
import type { MouseEvent } from 'react'
import { Typography } from '@mui/material'
import MuiListItem from '@mui/material/ListItem'
import Tooltip from '@/core/feedback/tooltip'
import { FavoriteActions, IconSlot, ItemButton, ItemLabel } from './styles'

export interface ListItemDarkProps {
    id?: string
    name?: string
    href?: string
    className?: string
    icon?: JSX.Element
    actions?: JSX.Element
    title?: string | JSX.Element
    selected?: boolean
    disabled?: boolean
    dense?: boolean
    expanded?: boolean
    'data-testid'?: string
    onClick?: (event?: MouseEvent<HTMLDivElement>) => void
}

const ListItemDark = ({
    id,
    name,
    href,
    icon,
    title,
    dense,
    actions,
    selected,
    disabled,
    className,
    expanded = true,
    onClick,
    ...otherProps
}: ListItemDarkProps) => {
    const handleClick = (event: MouseEvent<HTMLDivElement>) => {
        const opensNewTab =
            event.metaKey || event.ctrlKey || event.shiftKey || event.altKey

        if (href && opensNewTab) return

        if (href) event.preventDefault()

        onClick?.(event)
    }

    return (
        <MuiListItem disablePadding id={id} className={className}>
            <Tooltip
                key={name}
                placement='right'
                enterDelay={500}
                title={expanded ? '' : title}>
                <ItemButton
                    {...(href ? { component: 'a', href } : {})}
                    dense={dense}
                    expanded={expanded}
                    selected={selected}
                    disabled={disabled}
                    data-name={name}
                    data-testid={otherProps['data-testid']}
                    onClick={handleClick}>
                    {icon && <IconSlot dense={dense}>{icon}</IconSlot>}
                    {(title || actions) && (
                        <ItemLabel expanded={expanded} aria-hidden={!expanded}>
                            {title && (
                                <Typography
                                    flex='1 0 0'
                                    variant='body2'
                                    fontSize='13.5px'
                                    fontWeight={selected ? 500 : 400}
                                    sx={{
                                        minWidth: 0,
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap'
                                    }}>
                                    {title}
                                </Typography>
                            )}
                            {actions && (
                                <FavoriteActions className='list-item-dark-actions'>
                                    {actions}
                                </FavoriteActions>
                            )}
                        </ItemLabel>
                    )}
                </ItemButton>
            </Tooltip>
        </MuiListItem>
    )
}

export default ListItemDark
