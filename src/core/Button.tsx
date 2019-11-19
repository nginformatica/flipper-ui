import { Button as MuiButton } from '@material-ui/core'
import React, { FC, ElementType, MouseEvent } from 'react'
import styled from 'styled-components'
import { IDefault } from './Advertise'

export interface IProps extends IDefault {
    disabled?: boolean
    selected?: boolean
    component?: ElementType
    color?: 'default' | 'primary' | 'inherit' | 'secondary'
    size?: 'small' | 'medium' | 'large'
    href?: string
    fullWidth?: boolean
    variant?:
        | 'text'
        | 'outlined'
        | 'contained'
        | 'dashed'
    target?: string
    onClick?(event: MouseEvent<HTMLButtonElement>): void
}

const StyledButton = styled(MuiButton)<IProps & { dashed?: boolean }>`
    border-style: ${props => props.dashed
        ? 'dashed !important'
        : 'initial'};
    opacity: ${props => props.selected ? 0.5 : 1};
`

const Button: FC<IProps> = ({
    children,
    margin,
    padding,
    style = {},
    variant,
    ...otherProps
}) =>
    <StyledButton
        { ...otherProps }
        dashed={ variant === 'dashed' }
        variant={ variant === 'dashed' ? 'outlined' : variant }
        style={ { margin, padding, ...style } }>
        { children }
    </StyledButton>

export default Button
