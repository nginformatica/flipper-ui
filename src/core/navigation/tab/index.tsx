import React from 'react'
import MuiTab from '@mui/material/Tab'
import type { DefaultProps } from '../../types'
import type { TabOwnProps } from '@mui/material/Tab'

interface TabProps extends Omit<DefaultProps, 'children'>, TabOwnProps {
    href?: string
    label?: string
    value?: unknown
    minWidth?: string
    disabled?: boolean
    disableRipple?: boolean
    icon?: string | JSX.Element
}

const Tab = ({
    style,
    margin,
    disableRipple,
    padding,
    minWidth = '160px',
    href = '',
    ...otherProps
}: TabProps) => (
    <MuiTab
        href={href}
        disableRipple={disableRipple}
        style={{
            margin,
            padding,
            minWidth: minWidth,
            ...style
        }}
        {...otherProps}
    />
)

export default Tab
