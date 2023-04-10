import { Button as MuiButton } from '@material-ui/core'
import React, { ElementType, MouseEvent } from 'react'
import styled from 'styled-components'
import { DefaultProps } from './types'

export interface ButtonProps extends DefaultProps {
    disabled?: boolean
    selected?: boolean
    disableTouchRipple?: boolean
    component?: ElementType
    color?: 'default' | 'primary' | 'inherit' | 'secondary'
    size?: 'small' | 'medium' | 'large'
    href?: string
    fullWidth?: boolean
    variant?: 'text' | 'outlined' | 'contained' | 'dashed'
    target?: string
    children?: React.ReactNode
    'data-testid'?: string
    onClick?(event: MouseEvent<HTMLButtonElement>): void
}

const StyledButton = styled(MuiButton)<
    ButtonProps & { dashed?: 'true' | 'false' }
>`
    border-style: ${props =>
        props.dashed === 'true' ? 'dashed !important' : 'initial'};
    opacity: ${props => (props.selected ? 0.5 : 1)};
`

const Button = ({
    children,
    margin,
    padding,
    style = {},
    variant,
    ...otherProps
}: ButtonProps) => (
    <StyledButton
        {...otherProps}
        dashed={variant === 'dashed' ? 'true' : 'false'}
        variant={variant === 'dashed' ? 'outlined' : variant}
        style={{ margin, padding, ...style }}>
        {children}
    </StyledButton>
)

export default Button
