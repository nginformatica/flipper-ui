import React, { Component } from 'react'
import { times, inc } from 'ramda'
import _ from 'prop-types'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import styled from 'styled-components'
import Button from './Button'

const Content = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    justify-content: center;
    margin: 0.75em;
`

class Pagination extends Component {
    render() {
        const pages = times(inc, this.props.pages)

        return (
            <Content style={ this.props.style }>
                <Button
                    mini
                    onClick={ this.props.onPrevious }>
                    <MdKeyboardArrowLeft />
                </Button>
                {
                    pages.map(page =>
                        <Button
                            mini
                            key={ page }
                            active={ page === this.props.active }
                            onClick={ () => this.props.onNavigate(page) }>
                            { page }
                        </Button>
                    )
                }
                <Button
                    mini
                    onClick={ this.props.onNext }>
                    <MdKeyboardArrowRight />
                </Button>
            </Content>
        )
    }
}

Pagination.defaultProps = {
    active: 1,
    onNavigate: () => {}
}

Pagination.propTypes = {
    pages: _.number.isRequired,
    active: _.number,
    style: _.object,
    onNext: _.func,
    onPrevious: _.func,
    onNavigate: _.func
}

export default Pagination