import React, { ReactNode, FC } from 'react'
import styled from 'styled-components'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    children?: ReactNode
}

const StyledContent = styled.main`
    flex: 1;
    transition: all 500ms ease;
`

const Content: FC<IProps> = ({
    children,
    padding,
    margin,
    style = {},
    ...otherProps
}) =>
    <StyledContent
        { ...otherProps }
        style={ { padding, margin, ...style } }>
        { children }
    </StyledContent>

export default Content
