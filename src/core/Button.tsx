import { Button as MuiButton } from '@material-ui/core'
import React from 'react'
import { IDefault } from './Advertise'
import styled from 'styled-components';

interface IProps extends IDefault {
    mini?: boolean
    disabled?: boolean
    color?: 'default' | 'primary' | 'inherit' | 'secondary'
    size?: 'small' | 'medium' | 'large'
    href?: string
    fullWidth?: boolean
    variant?: 'text' | 'flat' | 'outlined' | 'contained' | 'raised' | 'fab' | 'extendedFab' | 'dashed'
    children?: React.ReactNode
    onClick?: () => void
}

const Button: React.SFC<IProps> = ({ children, margin, padding, style = {}, variant, ...otherProps }) =>
    <MuiButton
        {...otherProps}
        variant={variant === 'dashed' ? 'outlined' : variant}
        style={{ margin, padding, ...style }}>
        {children}
    </MuiButton>

const styleDashed = styled(Button)`
    border-style: ${props => props.variant === 'dashed' ? 'dashed !important;' : 'initial'}
`
export default styleDashed
