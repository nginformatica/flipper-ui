import FlipperSidebar from '../../Sidebar'
import React, { useEffect, useState, useCallback } from 'react'
import styled from 'styled-components'
import { theme } from 'nginformatica-styleguide'
import { times, map } from 'ramda'
import { Skeleton } from '@material-ui/lab'
import Tooltip from '../../Tooltip'
import List from '../../List'
import ListItem from '../../ListItem'

export interface ISidebarOption {
    icon: React.ReactElement
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

const StyledFlipperSidebar = styled(FlipperSidebar)`
    & > div {
        border-right: 1px solid ${theme.colors.grays.g6};
    }
`

const MenuItem = styled(ListItem)`
    &&& {
        & div {
            padding: 0;
        }
    }
`

const Link = styled.a`
    color: ${theme.colors.primary.main};
    text-decoration: none;
`

const PaperBar = styled.div`
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    flex: 1;
    padding-bottom: 16px;
`

const LABEL_TIMEOUT = 300

const renderSkeleton = (index: number) => (
    <div
        className='skeleton-container'
        role='skeleton'
        key={`sidebar-skeleton-${index}`}
        style={{ padding: '2px 10px' }}>
        <Skeleton width={36} height={36} />
    </div>
)

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

const emptyList: ISidebarOption[] = []

/**
 * Sidebar component V2
 */
const Sidebar = (props: IProps) => {
    const {
        options,
        loading,
        handleGoTo,
        extraOptions = emptyList,
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
            onToggle={toggle}
            top={top || 0}>
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
