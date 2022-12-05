import { Paper as MuiPaper } from '@material-ui/core'
import React, { FC } from 'react'
import type { DefaultProps } from './types'

export interface PaperProps extends DefaultProps {
    square?: boolean
    elevation?: number
}

const Paper: FC<PaperProps> = ({
    children,
    style = {},
    padding,
    margin,
    ...otherProps
}) => (
    <MuiPaper {...otherProps} style={{ padding, margin, ...style }}>
        {children}
    </MuiPaper>
)

export default Paper
