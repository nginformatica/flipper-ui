import React from 'react'
import type { ReactNode } from 'react'
import MuiTabs from '@mui/material/Tabs'
import type { DefaultProps } from '../../types'

export interface TabsProps extends DefaultProps {
    centered?: boolean
    children?: ReactNode
    value: string | number
    indicatorColor?: 'primary' | 'secondary'
    textColor?: 'secondary' | 'primary' | 'inherit'
    variant?: 'standard' | 'scrollable' | 'fullWidth'
    onChange?: (event: object, value: number) => void
}

const Tabs = ({
    children,
    style,
    margin,
    centered = true,
    padding = '6px 0 0',
    variant = 'standard',
    indicatorColor = 'primary',
    ...otherProps
}: TabsProps) => {
    return (
        <MuiTabs
            {...otherProps}
            variant={variant}
            centered={centered}
            indicatorColor={indicatorColor}
            style={{ padding, margin, ...style }}>
            {children}
        </MuiTabs>
    )
}

export default Tabs
