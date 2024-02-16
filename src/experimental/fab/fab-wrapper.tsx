import React from 'react'
import type { CSSProperties, ReactNode } from 'react'
import { Wrapper } from './styles'

export interface IProps {
    padding?: number | string
    style?: CSSProperties
    width?: number | string
    height?: number | string
    children?: ReactNode
}

const FabWrapper = ({ padding, children, style, width, height }: IProps) => (
    <Wrapper
        className='list-item-action'
        style={{ padding, width, height, ...style }}>
        {children}
    </Wrapper>
)

export default FabWrapper
