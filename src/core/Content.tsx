import React from 'react'
import styled from 'styled-components'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    children?: React.ReactNode
}

const StyledContent = styled.main`
    flex: 1;
    transition: all 500ms ease;
`

const Content = ({ children, ...otherProps }: IProps) =>
    <StyledContent { ...otherProps }>
        { children }
    </StyledContent>

export default Content
