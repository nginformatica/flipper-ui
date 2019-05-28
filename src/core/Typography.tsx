import { Typography as MuiTypography } from '@material-ui/core'
import React, { ReactNode, FC } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    noWrap?: boolean
    children?: ReactNode
    variant?:
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'h6'
        | 'subtitle1'
        | 'subtitle2'
        | 'body1'
        | 'body2'
        | 'caption'
        | 'button'
    color?:
        | 'error'
        | 'inherit'
        | 'primary'
        | 'secondary'
        | 'textPrimary'
        | 'textSecondary'
    align?:
        | 'inherit'
        | 'left'
        | 'center'
        | 'right'
        | 'justify'
}

const Typography: FC<IProps> = ({
    children,
    margin,
    padding,
    style = {},
    ...otherProps
}) =>
    <MuiTypography style={ { margin, padding, ...style } }
        { ...otherProps }>
        { children }
    </MuiTypography>

export default Typography
