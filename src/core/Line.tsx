import React, { FC } from 'react'
import styled from 'styled-components'
import { background, primary as primaryColor } from '../colors'
import { DefaultProps } from './types'

interface LineProps extends DefaultProps {
    primary?: boolean
    width?: string
}

const StyledLine = styled.hr<LineProps>`
    flex: 1;
    border: 1px solid
        ${props => (props.primary ? primaryColor.normal : background.normal)};
`

const Line: FC<LineProps> = ({ padding, margin, style, ...otherProps }) => (
    <StyledLine style={{ padding, margin, ...style }} {...otherProps} />
)

export default Line
