import { Paper as MuiPaper } from '@material-ui/core'
import React from 'react'
import type { DefaultProps } from '../types'

export interface PaperProps extends DefaultProps {
    square?: boolean
    elevation?: number
}

const Paper = ({
    children,
    style = {},
    padding,
    margin,
    ...otherProps
}: PaperProps) => (
    <MuiPaper
        {...otherProps}
        role='mui-paper-container'
        style={{ padding, margin, ...style }}>
        {children}
    </MuiPaper>
)

export default Paper
