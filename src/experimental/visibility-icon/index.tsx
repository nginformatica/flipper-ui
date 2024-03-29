import React from 'react'
import { StyledButton } from './styles'
import {
    Visibility as IconVisibility,
    VisibilityOff as IconVisibilityOff
} from '@/icons'

export interface IProps {
    name?: string
    show: boolean
    onToggle(): void
}

const VisibilityIcon = ({ show, onToggle, name, ...otherProps }: IProps) => (
    <StyledButton {...otherProps} padding='0px' name={name} onClick={onToggle}>
        {show ? (
            <IconVisibilityOff data-testid='icon-off' />
        ) : (
            <IconVisibility data-testid='icon-on' />
        )}
    </StyledButton>
)

export default VisibilityIcon
