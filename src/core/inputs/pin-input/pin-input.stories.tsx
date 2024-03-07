import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import type { Meta } from '@storybook/react'
import { PinInput } from '.'
import { ButtonContainer, ValidateContainer } from './styles'

export default {
    title: 'Inputs/PinInput',
    component: PinInput
} as Meta<typeof PinInput>

const PIN_LENGTH = 6

export const Default = () => {
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
                pin={pin}
                setPin={setPin}
                pinLength={PIN_LENGTH}
                validationResult={hasError}
                isValidating={isValidating}
                size='small'
                variant='outlined'
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

export const Large = () => {
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
            setPin(new Array(PIN_LENGTH))
            setHasError(true)
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
                pin={pin}
                setPin={setPin}
                pinLength={PIN_LENGTH}
                validationResult={hasError}
                isValidating={isValidating}
                size='large'
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
