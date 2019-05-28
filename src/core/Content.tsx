import React, { FC } from 'react'
import styled from 'styled-components'
import { IDefault } from './Advertise'

const StyledContent = styled.main`
    flex: 1;
    transition: all 500ms ease;
`

const Content: FC<IDefault> = ({
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
