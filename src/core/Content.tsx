import React, { FC } from 'react'
import styled from 'styled-components'
import { DefaultProps } from './types'

const StyledContent = styled.main`
    flex: 1;
    transition: all 500ms ease;
`

const Content: FC<DefaultProps> = ({
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
