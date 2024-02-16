import React, { useEffect, useState, useCallback } from 'react'
import type { ReactElement } from 'react'
import { Skeleton } from '@mui/material'
import { times, map } from 'ramda'
import { Tooltip, List } from '@/index'
import {
    Link,
    MenuItem,
    PaperBar,
    SkeletonWrapper,
    StyledFlipperSidebar
} from './styles'

export interface ISidebarOption {
    icon: ReactElement
    label: string
    name: string
    route: string
}

export interface IProps {
    options: ISidebarOption[]
    top?: number
    loading?: boolean
    handleGoTo?: (name: string, route: string) => () => void
    extraOptions?: ISidebarOption[]
}

const renderSkeleton = (index: number) => (
    <SkeletonWrapper
        className='skeleton-container'
        role='skeleton'
        key={`sidebar-skeleton-${index}`}>
        <Skeleton width={36} height={36} />
    </SkeletonWrapper>
)

const LABEL_TIMEOUT = 300

const SIDEBAR_SKELETON_SIZE = 6

const sidebarSkeleton = times(renderSkeleton, SIDEBAR_SKELETON_SIZE)

// create a function that extract path from location.pathname
// and return the route
const extract = (location: string): string => {
    const lastSlashIndex = location.lastIndexOf('/')

    return '/' + location.slice(lastSlashIndex + 1)
}

const useSidebar = () => {
    const [expanded, setExpanded] = useState(false)
    const route = extract(location.pathname)

    const toggle = useCallback(() => {
        setExpanded(!expanded)
    }, [expanded])

    return { toggle, expanded, route }
}

/**
 * Sidebar component V2
 */
const Sidebar = (props: IProps) => {
    const {
        options,
        loading,
        handleGoTo,
        extraOptions = [],
        top,
        ...otherProps
    } = props

    const { expanded, route, toggle } = useSidebar()

    const [showLabel, setShowLabel] = useState(expanded)

    useEffect(() => {
        if (expanded) {
            setTimeout(() => setShowLabel(true), LABEL_TIMEOUT)
        } else {
            setShowLabel(false)
        }
    }, [expanded])

    const renderOption = (option: ISidebarOption) => (
        <Link
            data-testid={`sidebar-option-${option.route.replace('/', '')}`}
            key={option.name}>
            <Tooltip
                withWrapper
                placement='right'
                enterDelay={500}
                title={expanded ? '' : option.label}>
                <MenuItem
                    key={option.name}
                    selected={option.name === route}
                    icon={option.icon}
                    style={{ minHeight: '42px' }}
                    padding='0 18px'
                    subtitle={showLabel ? option.label : ''}
                    onClick={handleGoTo?.(option.name, option.route)}
                />
            </Tooltip>
        </Link>
    )

    return (
        <StyledFlipperSidebar
            open
            docked
            name='sidebar'
            id='sidebar'
            ButtonProps={{ id: 'sidebar-toggle-button' }}
            minWidth={56}
            maxWidth={228}
            style={{ transition: 'width 100ms ease-in-out', zIndex: 1199 }}
            expanded={expanded}
            top={top || 0}
            onToggle={toggle}>
            <PaperBar {...otherProps}>
                <List dense>
                    {loading ? sidebarSkeleton : map(renderOption, options)}
                </List>
                <List dense>{!loading && map(renderOption, extraOptions)}</List>
            </PaperBar>
        </StyledFlipperSidebar>
    )
}

export default Sidebar
