import { divide, multiply, pipe, prop } from 'ramda'
import React, { FC } from 'react'
import styled from 'styled-components'
import { primary, white } from '../colors'
import { IDefault } from './Advertise'
import TableCell from './TableCell'

interface IProps extends IDefault {
    xs?: number
    name?: string
    id?: string
    title?: string
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

const Card: FC<IProps> = ({
    children,
    padding,
    margin,
    style = {},
    title,
    xs = 12,
    ...otherProps
}) =>
    <Container
        xs={ xs }
        style={ { padding, margin, ...style } }
        { ...otherProps }>
        <Header>{ title }</Header>
        <Content>{ children }</Content>
        <TableCell>
            <Header />
        </TableCell>
    </Container>

export default Card
