import React, { useState } from 'react'
import { ComponentMeta } from '@storybook/react'
import PinInput from '../core/PinInput'
import { Button } from '@material-ui/core'

export default {
    title: 'PinInput',
    component: PinInput
} as ComponentMeta<typeof PinInput>

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
            <span>Valid pin: 123123</span>
            <br />
            <br />
            <PinInput
                pin={ pin }
                setPin={ setPin }
                onPinChanged={ onPinChanged }
                pinLength={ PIN_LENGTH }
                validationResult={ hasError }
                isValidating={ isValidating }
                size='small'
            />
            <br />
            <br />
            <Button
                onClick={ () => {
                    handleValidation()
                } }>
                Validate
            </Button>
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
            <span>Valid pin: 123123</span>
            <br />
            <br />
            <PinInput
                pin={ pin }
                setPin={ setPin }
                onPinChanged={ onPinChanged }
                pinLength={ PIN_LENGTH }
                validationResult={ hasError }
                isValidating={ isValidating }
                size='large'
            />
            <br />
            <br />
            <Button
                onClick={ () => {
                    handleValidation()
                } }>
                Validate
            </Button>
        </>
    )
}
