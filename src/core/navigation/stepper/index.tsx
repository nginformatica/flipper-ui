import React, { cloneElement } from 'react'
import { Step, StepLabel, Stepper as MuiStepper } from '@material-ui/core'
import type { DefaultProps } from '../../types'

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

interface StepIconProps {
    icon: TStep['icon']
    active?: boolean
}

const StepIcon = ({ icon, active }: StepIconProps) => {
    if (typeof icon === 'function') {
        return icon(active)
    }

    return cloneElement(icon, {
        active: String(active),
        color: active ? 'primary' : 'disabled'
    })
}

export const Stepper = ({
    active,
    bottomLabel,
    steps,
    padding,
    margin,
    style = {},
    ...otherProps
}: StepperProps) => (
    <MuiStepper
        role='stepper-container'
        alternativeLabel={bottomLabel}
        activeStep={active}
        style={{ padding, margin, ...style }}
        {...otherProps}>
        {steps.map((step, index) => (
            <Step key={index}>
                <StepLabel
                    icon={
                        typeof step === 'object' ? (
                            <StepIcon
                                icon={step.icon}
                                active={!!isActive(index, active)}
                            />
                        ) : (
                            index + 1
                        )
                    }>
                    {typeof step === 'object' ? step.label : step}
                </StepLabel>
            </Step>
        ))}
    </MuiStepper>
)

export default Stepper
