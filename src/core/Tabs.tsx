import { Tabs as MuiTabs } from '@material-ui/core'
import React, { ReactNode } from 'react'
import { DefaultProps } from './types'

interface TabsProps extends DefaultProps {
    centered?: boolean
    value: string | number
    color?: 'default' | 'inherit' | 'primary' | 'secondary'
    variant?: 'standard' | 'scrollable' | 'fullWidth'
    children?: ReactNode
    indicatorColor?: 'primary' | 'secondary'
    onChange?: (event: object, value: number) => void
}

interface IClasses {
    classes?: {
        default: string
        inherit: string
        primary: string
        secondary: string
        indicator: string
    }
}

const Tabs = ({
    children,
    centered = true,
    padding = '6px 0 0',
    style,
    margin,
    variant = 'standard',
    indicatorColor = 'primary',
    ...otherProps
}: TabsProps & IClasses) => {
    return (
        <MuiTabs
            indicatorColor={indicatorColor}
            centered={centered}
            {...otherProps}
            variant={variant}
            style={{ padding, margin, ...style }}>
            {children}
        </MuiTabs>
    )
}

export default Tabs
