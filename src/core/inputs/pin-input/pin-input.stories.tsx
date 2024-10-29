import React, { useState } from 'react'
import type { PinInputGridProps } from '.'
import type { Meta, StoryObj } from '@storybook/react'
import Button from '../button'
import PinInput from '.'
import { ButtonContainer, ValidateContainer } from './styles'

const meta: Meta<typeof PinInput> = {
    title: 'Inputs/PinInput',
    component: PinInput,
    argTypes: {
        size: {
            options: ['small', 'large'],
            control: { type: 'radio' },
            description: 'The size of the pin-input.'
        },
        variant: {
            options: ['outlined', 'standard'],
            control: { type: 'radio' },
            description: 'The variant of the pin-input.'
        },
        style: {
            control: 'object',
            description: 'The pin-input style.'
        }
    }
}

export default meta

type Story = StoryObj<typeof PinInput>

const PinInputWrapper = (args: JSX.IntrinsicAttributes & PinInputGridProps) => {
    const PIN_LENGTH = 6

    const [pin, setPin] = useState<Array<number | undefined>>(
        new Array(PIN_LENGTH)
    )

    const onPinChanged = (pinEntry: number | undefined, index: number) => {
        const newPin = [...pin]

        newPin[index] = pinEntry
        setPin(newPin)
    }
    const [hasError, setHasError] = useState(false)
    const [isValidating, setIsValidating] = useState(false)

    const handleValidation = () => {
        setIsValidating(true)
        if (pin.join('') !== '123123') {
            setHasError(true)
            setPin(new Array(PIN_LENGTH))
        } else {
            setHasError(false)
            alert('PIN is correct')
        }
        setIsValidating(false)
    }

    return (
        <>
            <ValidateContainer>Valid pin: 123123</ValidateContainer>
            <PinInput
                {...args}
                pin={pin}
                setPin={setPin}
                pinLength={PIN_LENGTH}
                validationResult={hasError}
                isValidating={isValidating}
                onPinChanged={onPinChanged}
            />
            <ButtonContainer>
                <Button
                    onClick={() => {
                        handleValidation()
                    }}>
                    Validate
                </Button>
            </ButtonContainer>
        </>
    )
}

export const pinInput: Story = {
    render: ({ ...args }) => {
        return <PinInputWrapper {...args} />
    },
    args: {
        size: 'small',
        variant: 'outlined',
        style: {}
    }
}
