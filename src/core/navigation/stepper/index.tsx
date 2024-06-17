import React, { cloneElement } from 'react'
import MuiStep from '@mui/material/Step'
import MuiStepLabel from '@mui/material/StepLabel'
import MuiStepper from '@mui/material/Stepper'
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

const Stepper = ({
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
            <MuiStep key={index}>
                <MuiStepLabel
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
                </MuiStepLabel>
            </MuiStep>
        ))}
    </MuiStepper>
)

export default Stepper
