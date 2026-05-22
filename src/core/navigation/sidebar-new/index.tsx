import React, { useState } from 'react'
import type { ReactNode } from 'react'
import { Typography } from '@mui/material'
import Collapse from '@mui/material/Collapse'
import Drawer from '@mui/material/Drawer'
import { alpha } from '@mui/material/styles'
import type { DefaultProps } from '../../types'
import { IconExpandMore, IconMenu, IconStar } from '@/icons/mui'
import {
    Divider,
    DividerWrapper,
    FavoritesHeader,
    FavoritesSection,
    Header,
    HeaderActions,
    HeaderActionsItem,
    HeaderIconButton,
    LogoContainer,
    MainArea
} from './styles'
import { theme } from '@/theme'

const { darkBlue, neutral } = theme.colors

export interface SidebarNewProps extends DefaultProps {
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
    logo?: ReactNode
    favoritesTitle?: string
    favorites?: ReactNode
    favoritesOpen?: boolean
    onFavoritesToggle?: () => void
    onToggle: () => void
}

const SidebarNew = ({
    id,
    anchor = 'left',
    className,
    docked = false,
    expanded = true,
    margin,
    maxWidth = 248,
    minWidth = 60,
    top = 64,
    open,
    padding,
    showButton = true,
    style,
    variant = 'permanent',
    onToggle,
    children,
    name,
    logo,
    favoritesTitle = 'Favoritos',
    favorites,
    favoritesOpen = false,
    onFavoritesToggle,
    ...otherProps
}: SidebarNewProps) => {
    const [favoritesListExpanded, setFavoritesListExpanded] = useState(true)

    const hasFavorites = Boolean(favorites)
    const showFavoritesArea = hasFavorites && expanded
    const showHeader = Boolean(logo) || hasFavorites || showButton

    const handleFavoritesListToggle = () =>
        setFavoritesListExpanded(prev => !prev)

    const width = expanded ? maxWidth : minWidth
    const widthTransition = `width ${expanded ? 225 : 195}ms cubic-bezier(0.4, 0, 0.6, 1)`

    return (
        <Drawer
            {...otherProps}
            id={id}
            open={open}
            anchor={anchor}
            variant={variant}
            className={className}
            style={{
                width,
                padding,
                margin,
                top,
                transition: widthTransition,
                ...style
            }}
            slotProps={{
                paper: {
                    style: docked
                        ? {
                              position: 'fixed',
                              left: '0px',
                              bottom: '0px',
                              top: 'inherit',
                              height: 'inherit'
                          }
                        : {},
                    sx: {
                        display: 'flex',
                        flexDirection: 'column',
                        width,
                        overflowX: 'hidden',
                        transition: widthTransition,
                        backgroundColor: darkBlue[600],
                        color: alpha(neutral[50], 0.7),
                        borderRight: `1px solid ${alpha(neutral[50], 0.08)}`
                    }
                }
            }}>
            {showHeader && (
                <Header anchor={anchor}>
                    {logo && (
                        <LogoContainer expanded={expanded}>
                            {logo}
                        </LogoContainer>
                    )}
                    <HeaderActions>
                        {hasFavorites && (
                            <HeaderActionsItem expanded={expanded}>
                                <HeaderIconButton
                                    type='button'
                                    selected={favoritesOpen}
                                    data-testid='sidebar-new-favorites-button'
                                    aria-pressed={favoritesOpen}
                                    onClick={onFavoritesToggle}>
                                    <IconStar />
                                </HeaderIconButton>
                            </HeaderActionsItem>
                        )}
                        {showButton && (
                            <HeaderIconButton
                                type='button'
                                name={`button-${name || 'sidebar-new'}`}
                                data-testid='sidebar-new-button'
                                onClick={onToggle}>
                                <IconMenu />
                            </HeaderIconButton>
                        )}
                    </HeaderActions>
                </Header>
            )}
            {showFavoritesArea && (
                <Collapse unmountOnExit in={favoritesOpen} timeout='auto'>
                    <FavoritesSection>
                        <FavoritesHeader
                            type='button'
                            open={favoritesListExpanded}
                            aria-expanded={favoritesListExpanded}
                            data-testid='sidebar-new-favorites-header'
                            onClick={handleFavoritesListToggle}>
                            <Typography
                                lineHeight={1}
                                variant='caption'
                                fontWeight={500}>
                                {favoritesTitle.toUpperCase()}
                            </Typography>
                            <IconExpandMore />
                        </FavoritesHeader>
                        <Collapse in={favoritesListExpanded} timeout='auto'>
                            <div>{favorites}</div>
                        </Collapse>
                    </FavoritesSection>
                    <DividerWrapper>
                        <Divider />
                    </DividerWrapper>
                </Collapse>
            )}
            <MainArea>{children}</MainArea>
        </Drawer>
    )
}

export default SidebarNew
