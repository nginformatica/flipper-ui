import { Tab as MuiTab } from '@material-ui/core'
import React from 'react'
import { DefaultProps } from '../types'

interface TabProps extends DefaultProps {
    disabled?: boolean
    icon?: string | JSX.Element
    label?: string
    value?: unknown
    disableRipple?: boolean
}

const Tab = ({
    style,
    margin,
    disableRipple,
    padding,
    ...otherProps
}: TabProps) => (
    <MuiTab
        disableRipple
        style={{ margin, padding, ...style }}
        {...otherProps}
    />
)

export default Tab
