import React, { useState } from 'react'
import { Meta } from '@storybook/react'
import PinInput from '.'
import { Button } from '@material-ui/core'
import styled from 'styled-components'

export default {
    title: 'PinInput',
    component: PinInput
} as Meta<typeof PinInput>

const ValidateContainer = styled.div`
    display: flex;
    width: auto;
    justify-content: center;
    margin-bottom: 2rem;
`

const ButtonContainer = styled.div`
    display: flex;
    width: auto;
    justify-content: center;
    margin-top: 3rem;
`

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
            <ValidateContainer>
                <span>Valid pin: 123123</span>
            </ValidateContainer>
            <PinInput
                pin={pin}
                setPin={setPin}
                onPinChanged={onPinChanged}
                pinLength={PIN_LENGTH}
                validationResult={hasError}
                isValidating={isValidating}
                size='small'
                variant='outlined'
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
            <ValidateContainer>
                <span>Valid pin: 123123</span>
            </ValidateContainer>
            <PinInput
                pin={pin}
                setPin={setPin}
                onPinChanged={onPinChanged}
                pinLength={PIN_LENGTH}
                validationResult={hasError}
                isValidating={isValidating}
                size='large'
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
