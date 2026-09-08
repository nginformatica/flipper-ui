import React, { cloneElement } from 'react'
import type { ReactNode } from 'react'
import MuiStep from '@mui/material/Step'
import MuiStepButton from '@mui/material/StepButton'
import MuiStepLabel from '@mui/material/StepLabel'
import MuiStepper from '@mui/material/Stepper'
import type { DefaultProps } from '../../types'
import Typography from '@/core/data-display/typography'

export interface StepperProps extends DefaultProps {
    active?: number
    steps: Array<string | TStep>
    bottomLabel?: boolean
    orientation?: 'horizontal' | 'vertical'
    /**
     * Frees the steps from `active`: none is completed or blocked by its
     * position alone, each one carries its own `completed` and `disabled`.
     * Required for free navigation — a linear stepper blocks every step
     * after `active`, so clicking ahead does nothing.
     * @optional
     */
    nonLinear?: boolean
    /**
     * Called with the index of the clicked step. It only turns the steps into
     * buttons alongside `nonLinear` — on its own the stepper stays the
     * read-only trail it has always been, so a handler injected by tooling
     * (Storybook auto-actions, a spread of props) cannot make it clickable.
     * @optional
     */
    onStepClick?: (index: number) => void
}

type TStep = {
    label: JSX.Element | string
    icon?: JSX.Element | ((active?: boolean) => JSX.Element)
    /**
     * Overrides the completion the stepper would infer from `active`, and is
     * the only source of it under `nonLinear`.
     * @optional
     */
    completed?: boolean
    /**
     * Blocks the step: greyed out, and unreachable by mouse or keyboard when
     * `onStepClick` is set.
     * @optional
     */
    disabled?: boolean
    /**
     * Secondary line under the label — a percentage, a count. It lands inside
     * the label, so it also names the step for screen readers: `'45%'` reads
     * as part of the button. Inline content only.
     * @optional
     */
    caption?: ReactNode
}

interface StepIconProps {
    icon: NonNullable<TStep['icon']>
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

const isActive = (index: number, active: StepperProps['active']) =>
    active !== undefined ? active >= index : undefined

const Stepper = ({
    active,
    bottomLabel,
    steps,
    padding,
    margin,
    nonLinear,
    onStepClick,
    style = {},
    ...otherProps
}: StepperProps) => (
    <MuiStepper
        data-testid='stepper-container'
        alternativeLabel={bottomLabel}
        activeStep={active}
        nonLinear={nonLinear}
        style={{ padding, margin, ...style }}
        {...otherProps}>
        {steps.map((step, index) => {
            const { label, icon, completed, disabled, caption }: TStep =
                typeof step === 'object' ? step : { label: step }

            const stepActive = nonLinear
                ? index === active || !!completed
                : !!isActive(index, active)

            const stepIcon = icon ? (
                <StepIcon icon={icon} active={stepActive} />
            ) : (
                index + 1
            )

            const stepCaption = caption ? (
                <Typography variant='caption'>{caption}</Typography>
            ) : undefined

            return (
                <MuiStep key={index} completed={completed} disabled={disabled}>
                    {nonLinear && onStepClick ? (
                        <MuiStepButton
                            icon={stepIcon}
                            optional={stepCaption}
                            onClick={() => onStepClick(index)}>
                            {label}
                        </MuiStepButton>
                    ) : (
                        <MuiStepLabel icon={stepIcon} optional={stepCaption}>
                            {label}
                        </MuiStepLabel>
                    )}
                </MuiStep>
            )
        })}
    </MuiStepper>
)

export default Stepper
