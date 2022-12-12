import React from 'react'
import { DefaultProps } from './types'
import MuiTypography, { TypographyProps } from '@material-ui/core/Typography'

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
