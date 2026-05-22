import React from 'react'
import type { MouseEvent } from 'react'
import { Typography } from '@mui/material'
import MuiListItem from '@mui/material/ListItem'
import { IconSlot, ItemButton } from './styles'

export interface ListItemDarkProps {
    id?: string
    name?: string
    className?: string
    icon?: JSX.Element
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
    className,
    icon,
    title,
    selected,
    disabled,
    dense,
    expanded = true,
    onClick,
    ...otherProps
}: ListItemDarkProps) => {
    return (
        <MuiListItem disablePadding id={id} className={className}>
            <ItemButton
                selected={selected}
                disabled={disabled}
                dense={dense}
                expanded={expanded}
                data-name={name}
                data-testid={otherProps['data-testid']}
                onClick={onClick}>
                {icon && <IconSlot dense={dense}>{icon}</IconSlot>}
                {title && (
                    <Typography
                        variant='body2'
                        fontWeight={selected ? 500 : 400}
                        sx={{
                            flex: '1 0 0',
                            minWidth: 0,
                            opacity: expanded ? 1 : 0,
                            transition:
                                'opacity 195ms cubic-bezier(0.4, 0, 0.6, 1)',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                        }}>
                        {title}
                    </Typography>
                )}
            </ItemButton>
        </MuiListItem>
    )
}

export default ListItemDark
