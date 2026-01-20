import React from 'react'
import type { ReactNode } from 'react'
import MuiTab from '@mui/material/Tab'
import type { DefaultProps } from '../../types'
import type { TabOwnProps } from '@mui/material/Tab'

interface TabProps extends Omit<DefaultProps, 'children'>, TabOwnProps {
    href?: string
    value?: unknown
    minWidth?: string
    disabled?: boolean
    disableRipple?: boolean
    label?: string | ReactNode
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
