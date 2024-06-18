import React from 'react'
import MuiTypography from '@mui/material/Typography'
import type { DefaultProps } from '../../types'
import type { TypographyProps } from '@mui/material/Typography'

const Typography = ({
    children,
    margin,
    padding,
    style = {},
    variant = 'body2',
    ...otherProps
}: TypographyProps & DefaultProps) => (
    <MuiTypography
        {...otherProps}
        variant={variant}
        style={{ margin, padding, ...style }}>
        {children}
    </MuiTypography>
)

export default Typography
