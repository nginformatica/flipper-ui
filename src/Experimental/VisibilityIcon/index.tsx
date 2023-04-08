import { IconButton } from '@/index'
import {
    Visibility as IconVisibility,
    VisibilityOff as IconVisibilityOff
} from '@/icons'
import React from 'react'
import styled from 'styled-components'

interface IProps {
    name?: string
    show: boolean
    onToggle(): void
}

const StyledButton = styled(IconButton)`
    width: 36px !important;
    height: 36px !important;
`

const VisibilityIcon = ({ show, onToggle, name, ...otherProps }: IProps) => (
    <StyledButton {...otherProps} padding='0px' name={name} onClick={onToggle}>
        {show ? (
            <IconVisibilityOff role='icon-off' />
        ) : (
            <IconVisibility role='icon-on' />
        )}
    </StyledButton>
)

export default VisibilityIcon
