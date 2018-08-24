import React from 'react'
import { __, divide, multiply, pipe, prop } from 'ramda'
import _ from 'prop-types'
import styled from 'styled-components'
import { primary, white } from '../colors'

const getPercent = pipe(prop('xs'), multiply(100), divide(__, 12))

const Container = styled.div`
    width: calc(${getPercent}% - 24px);
    background: ${primary.normal};
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

const Card = ({ children, style, title, xs }) =>
    <Container
        xs={ xs }
        style={ style }>
        <Header>{ title }</Header>
        <Content>{ children }</Content>
    </Container>

Card.defaultProps = {
    xs: 12
}

Card.propTypes = {
    xs: _.number,
    title: _.string,
    children: _.node,
    style: _.object
}

export default Card