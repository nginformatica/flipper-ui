import { mount } from 'cypress/react'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, PinInput } from '../../../src'

const PIN_LENGTH = 6

const ButtonContainer = styled.div`
    display: flex;
    width: auto;
    justify-content: center;
    margin-top: 3rem;
`

const Component: React.FC = () => {
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
            <PinInput
                data-cy='pin-input-container'
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
                    id='validate-pin-input'
                    onClick={() => {
                        handleValidation()
                    }}>
                    Validate
                </Button>
            </ButtonContainer>
        </>
    )
}

export const PinInputFactory = () => {
    mount(<Component />)
}
