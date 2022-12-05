import { Step, StepLabel, Stepper as MuiStepper } from '@material-ui/core'
import React, { Component } from 'react'
import { DefaultProps } from './types'

export interface StepperProps extends DefaultProps {
    active?: number
    steps: Array<string | TStep>
    bottomLabel?: boolean
    orientation?: 'horizontal' | 'vertical'
}

type TStep = {
    label: JSX.Element | string
    icon: JSX.Element | ((active?: boolean) => JSX.Element)
}

const isActive = (index: number, active: StepperProps['active']) =>
    active !== undefined ? active >= index : undefined

class Stepper extends Component<StepperProps, {}> {
    public static defaultProps = { active: 0 }

    public render() {
        const {
            active,
            bottomLabel,
            steps,
            padding,
            margin,
            style = {},
            ...otherProps
        } = this.props

        return (
            <MuiStepper
                alternativeLabel={bottomLabel}
                activeStep={active}
                style={{ padding, margin, ...style }}
                {...otherProps}>
                {steps.map((step, index) => (
                    <Step key={index}>
                        <StepLabel
                            icon={
                                typeof step === 'object'
                                    ? typeof step.icon === 'function'
                                        ? step.icon(isActive(index, active))
                                        : React.cloneElement(step.icon, {
                                              active: isActive(index, active),
                                              color: isActive(index, active)
                                                  ? 'primary'
                                                  : 'default'
                                          })
                                    : index + 1
                            }>
                            {typeof step === 'object' ? step.label : step}
                        </StepLabel>
                    </Step>
                ))}
            </MuiStepper>
        )
    }
}

export default Stepper
