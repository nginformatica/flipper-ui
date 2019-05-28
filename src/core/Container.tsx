import React, { ReactNode, FC } from 'react'
import styled from 'styled-components'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    children?: ReactNode
}

const StyledContainer = styled.div`
    display: flex;
    flex: 1;
`

const Container: FC<IProps> = ({
    children,
    padding,
    margin,
    style = {},
    ...otherProps
}) =>
    <StyledContainer
        style={ { padding, margin, ...style } }
        { ...otherProps }>
        { children }
    </StyledContainer>

export default Container
