import React from 'react'
import { Paper as MuiPaper } from '@material-ui/core'
import type { DefaultProps } from '../../types'
import type { PaperProps as MuiPaperProps } from '@material-ui/core'

export interface PaperProps extends DefaultProps, MuiPaperProps {
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
