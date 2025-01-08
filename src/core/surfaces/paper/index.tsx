import React from 'react'
import MuiPaper from '@mui/material/Paper'
import type { DefaultProps } from '../../types'
import type { PaperProps } from '@mui/material/Paper'

export interface IPaperProps extends DefaultProps, PaperProps {
    square?: boolean
    elevation?: number
}

const Paper = ({
    children,
    style = {},
    padding,
    margin,
    ...otherProps
}: IPaperProps) => (
    <MuiPaper {...otherProps} style={{ padding, margin, ...style }}>
        {children}
    </MuiPaper>
)

export default Paper
