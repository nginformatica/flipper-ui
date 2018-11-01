import { Button as MuiButton } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    mini?: boolean
    disabled?: boolean
    component?: 'string'
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
        { ...otherProps }
        variant={ variant === 'dashed' ? 'outlined' : variant }
        style={ { margin, padding, ...style } }>
        { children }
    </MuiButton>

const ButtonStyled = styled(Button)`
    border-style: ${props => props.variant === 'dashed'
        ? 'dashed !important'
        : 'initial'
    }
`
export default ButtonStyled
