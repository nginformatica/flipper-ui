import React from 'react'
import {
    KeyboardArrowLeft as IconArrowLeft,
    KeyboardArrowRight as IconArrowRight
} from '@mui/icons-material'
import Drawer from '@mui/material/Drawer'
import type { DefaultProps } from '../../types'
import type { IButtonProps } from '@/core/inputs/button'
import { Action, AnchorButton } from './styles'
import { theme } from '@/theme'

const { neutral } = theme.colors

export interface SidebarProps extends DefaultProps {
    open: boolean
    expanded?: boolean
    showButton?: boolean
    anchor?: 'top' | 'left' | 'bottom' | 'right'
    variant?: 'persistent' | 'temporary' | 'permanent'
    docked?: boolean
    maxWidth?: number | string
    minWidth?: number | string
    top?: number | string
    name?: string
    ButtonProps?: IButtonProps
    onToggle: () => void
}

const Sidebar = ({
    id,
    anchor = 'left',
    className,
    docked = false,
    expanded = true,
    margin,
    maxWidth = 220,
    minWidth = 72,
    top = 64,
    open,
    padding,
    showButton = true,
    style,
    variant = 'permanent',
    ButtonProps,
    onToggle,
    children,
    name,
    ...otherProps
}: SidebarProps) => {
    const renderAction = () => {
        const iconToLeft =
            (anchor === 'left' && expanded) || (anchor === 'right' && !expanded)

        return (
            <Action anchor={anchor}>
                <AnchorButton
                    name={`button-${name || 'sidebar'}`}
                    data-testid='sidebar-button'
                    variant='contained'
                    padding='6px 16px'
                    minwidth={minWidth}
                    onClick={onToggle}
                    {...ButtonProps}>
                    {iconToLeft ? (
                        <IconArrowLeft fontSize='medium' />
                    ) : (
                        <IconArrowRight fontSize='medium' />
                    )}
                </AnchorButton>
            </Action>
        )
    }

    const width = expanded ? maxWidth : minWidth

    return (
        <Drawer
            {...otherProps}
            id={id}
            open={open}
            anchor={anchor}
            variant={variant}
            className={className}
            style={{ width, padding, margin, top, ...style }}
            PaperProps={{
                style: docked
                    ? {
                          position: 'fixed',
                          left: '0px',
                          bottom: '0px',
                          top: 'inherit',
                          width: 'inherit',
                          height: 'inherit'
                      }
                    : {},
                sx: {
                    backgroundColor: neutral[100]
                }
            }}>
            {showButton && renderAction()}
            {children}
        </Drawer>
    )
}

export default Sidebar
