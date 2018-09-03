import { Typography as MuiTypography } from '@material-ui/core'
import React from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    margin?: number
    padding?: number
    noWrap?: boolean
    children?: React.ReactNode
    variant?:
        | 'display4'
        | 'display3'
        | 'display2'
        | 'display1'
        | 'headline'
        | 'title'
        | 'subheading'
        | 'body2'
        | 'body1'
        | 'caption'
        | 'button'
    color?:
        | 'default'
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

const Typography = ({ style, children, margin, padding, ...otherProps }: IProps) =>
    <MuiTypography
        style={ { margin, padding, ...style } }
        { ...otherProps }>
        { children }
    </MuiTypography>

export default Typography
