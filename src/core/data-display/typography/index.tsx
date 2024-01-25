import React from 'react'
import MuiTypography from '@material-ui/core/Typography'
import type { DefaultProps } from '../../types'
import type { TypographyProps } from '@material-ui/core/Typography'

export const Typography = ({
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
