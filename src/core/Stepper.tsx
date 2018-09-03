import {
    Step,
    StepLabel,
    Stepper as MuiStepper
} from '@material-ui/core'
import React, { Component, Fragment } from 'react'
import Avatar from './Avatar'
import Line from './Line'

interface IProps {
    active?: number
    steps: string[]
    style?: object
    bottomLabel?: boolean
}

class Stepper extends Component<IProps> {
    public static defaultProps = { active: 0 }

    public render() {
        const { active, bottomLabel, steps, style } = this.props

        return (
            <MuiStepper
                alternativeLabel={ bottomLabel }
                activeStep={ active }
                style={ style }>
                {
                    steps.map((step, index) =>
                        <Step key={ index }>
                            <StepLabel>{ step }</StepLabel>
                        </Step>
                    )
                }
            </MuiStepper>
        )
    }
}

export default Stepper
