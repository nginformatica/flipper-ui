import { divide, multiply, pipe, prop } from 'ramda'
import React from 'react'
import styled from 'styled-components'
import { primary, white } from '../colors'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    xs?: number
    title?: string
    children?: React.ReactNode
}

interface IContainer {
    xs: number
    style?: object
}

// __ from ramda was not recognized by TS
const getPercent = pipe(prop('xs'), multiply(100), num => divide(num, 12))

const Container = styled.div<IContainer>`
    width: calc(${getPercent}% - 24px);
    background: ${primary.normal};
    font-family: 'Roboto', sans-serif;
    display: block;
    border-radius: 12px;
    margin: 12px;
`

const Header = styled.div`
    border-radius: 12px;
    color: ${white};
    padding: 0.75em;
`

const Content = styled.div`
    background: ${white};
    border-radius: 12px;
    min-height: 52px;
    padding: 12px;
    border: 1px solid ${primary.normal};
`

const Card: React.SFC<IProps> = ({ children, padding, margin, style = {}, title, xs = 12, ...otherProps }) =>
    <Container
        xs={ xs }
        style={ { padding, margin, ...style } }
        { ...otherProps }>
        <Header>{ title }</Header>
        <Content>{ children }</Content>
    </Container>

export default Card
