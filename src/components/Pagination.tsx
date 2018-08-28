import _ from 'prop-types'
import { inc, times } from 'ramda'
import React, { Component } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import styled from 'styled-components'
import Button from './Button'

interface IProps {
    pages?: number
    active: number
    style?: object
    onNext: () => {}
    onPrevious: () => {}
    onNavigate: (page) => {}
}

const Content = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    justify-content: center;
    margin: 0.75em;
`

class Pagination extends Component<IProps> {
    public static defaultProps = { pages: 1 }

    public render() {
        const pages = times(inc, this.props.pages)

        return (
            <Content style={ this.props.style }>
                <Button
                    mini
                    onClick={ this.props.onPrevious }>
                    <MdKeyboardArrowLeft />
                </Button>
                {
                    pages.map((page) =>
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

export default Pagination
