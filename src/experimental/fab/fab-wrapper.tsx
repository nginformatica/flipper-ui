import type { CSSProperties, ReactNode } from 'react'
import React from 'react'
import { default as styled } from 'styled-components'

export interface IProps {
    padding?: number | string
    style?: CSSProperties
    width?: number | string
    height?: number | string
    children?: ReactNode
}

const Wrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 200ms ease;
    &:hover {
        opacity: 1;
    }
`

const FabWrapper = ({ padding, children, style, width, height }: IProps) => (
    <Wrapper
        className='list-item-action'
        style={{ padding, width, height, ...style }}>
        {children}
    </Wrapper>
)

export default FabWrapper
