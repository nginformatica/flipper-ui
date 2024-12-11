import React from 'react'
import { IconVisibility, IconVisibilityOff } from '@/icons/mui-icons'
import { StyledButton } from './styles'

export interface IProps {
    name?: string
    show: boolean
    onToggle(): void
}

const PasswordVisibility = ({
    show,
    onToggle,
    name,
    ...otherProps
}: IProps) => (
    <StyledButton
        {...otherProps}
        padding='0px'
        name={name ?? 'show-password'}
        onClick={onToggle}>
        {show ? (
            <IconVisibilityOff data-testid='icon-off' />
        ) : (
            <IconVisibility data-testid='icon-on' />
        )}
    </StyledButton>
)

export default PasswordVisibility
