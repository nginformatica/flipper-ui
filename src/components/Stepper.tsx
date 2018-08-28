import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'
import Line from './Line'

interface IProps {
    active?: number
    steps: string[],
    style?: object
}

const Div = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

class Stepper extends Component<IProps> {
    public static defaultProps = { active: 0 }

    public render() {
        const { steps, active, style } = this.props

        return (
            <Div style={ style }>
                {
                    steps.map((step, index) =>
                        <Fragment key={ index }>
                            { index > 0 && <Line primary={ index <= active } /> }
                            <Avatar primary={ index <= active }>{ step }</Avatar>
                        </Fragment>
                    )
                }
            </Div>
        )
    }
}

export default Stepper
