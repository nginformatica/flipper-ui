import { Tabs as MuiTabs } from '@material-ui/core'
import React, { FC, ReactNode } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    centered?: boolean
    value: string | number
    color?: 'default' | 'inherit' | 'primary' | 'secondary'
    variant?: 'standard' | 'scrollable' | 'fullWidth'
    children?: ReactNode
    indicatorColor?: 'primary' | 'secondary'
    onChange?: (event: object, value: number) => void
}

const Tabs: FC<IProps> = ({
    children,
    centered = true,
    padding = '6px 0 0',
    style,
    margin,
    indicatorColor = 'primary',
    variant = 'standard',
    ...otherProps
}) => {
    return (
        <MuiTabs
            centered={ centered }
            { ...otherProps }
            variant={ variant }
            indicatorColor={ indicatorColor }
            style={ { padding, margin, ...style } }>
            { children }
        </MuiTabs>
    )
}

export default Tabs
