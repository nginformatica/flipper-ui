import {
    Step,
    StepLabel,
    Stepper as MuiStepper
} from '@material-ui/core'
import React, { Component } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    active?: number
    steps: string[]
    bottomLabel?: boolean
}

class Stepper extends Component<IProps, {}> {
    public static defaultProps = { active: 0 }

    public render() {
        const {
            active,
            bottomLabel,
            steps,
            padding,
            margin,
            style = {},
            className
        } = this.props

        return (
            <MuiStepper
                alternativeLabel={ bottomLabel }
                activeStep={ active }
                style={ { padding, margin, ...style } }
                className={ className }>
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
