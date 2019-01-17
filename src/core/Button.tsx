import { Button as MuiButton } from '@material-ui/core'
import React, { SFC } from 'react'
import styled from 'styled-components'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    mini?: boolean
    disabled?: boolean
    selected?: boolean
    component?: string
    color?: 'default' | 'primary' | 'inherit' | 'secondary'
    size?: 'small' | 'medium' | 'large'
    href?: string
    fullWidth?: boolean
    variant?: 'text' | 'flat' | 'outlined' | 'contained' | 'fab' | 'extendedFab' | 'dashed'
    children?: React.ReactNode
    onClick?: (event?) => void
}

const Button: SFC<IProps> = ({ children, margin, padding, style = {}, variant, ...otherProps }) =>
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
    };
    opacity: ${props => props.selected ? 0.5 : 1 };
`

export default ButtonStyled
