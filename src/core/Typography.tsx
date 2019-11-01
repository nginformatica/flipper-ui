import React, { FC } from 'react'
import { IDefault } from './Advertise'
import MuiTypography, { TypographyProps } from '@material-ui/core/Typography'

const Typography: FC<TypographyProps & IDefault> = ({
    children,
    margin,
    padding,
    style = {},
    variant = 'body2',
    ...otherProps
}) =>
    <MuiTypography
        { ...otherProps }
        variant={ variant }
        style={ { margin, padding, ...style } }>
        { children }
    </MuiTypography>

export default Typography
