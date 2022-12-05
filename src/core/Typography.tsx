import React, { FC } from 'react'
import { DefaultProps } from './types'
import MuiTypography, { TypographyProps } from '@material-ui/core/Typography'

const Typography: FC<TypographyProps & DefaultProps> = ({
    children,
    margin,
    padding,
    style = {},
    variant = 'body2',
    ...otherProps
}) => (
    <MuiTypography
        {...otherProps}
        variant={variant}
        style={{ margin, padding, ...style }}>
        {children}
    </MuiTypography>
)

export default Typography
