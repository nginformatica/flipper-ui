import React, { useState } from 'react'
import type { PinInputGridProps } from '@/core/inputs/pin-input'
import PinInput from '@/core/inputs/pin-input'

const PIN_LENGTH = 6

interface IProps {
    pinInputProps?: Partial<PinInputGridProps>
}

const Mock = ({ pinInputProps }: IProps) => {
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
                pin={pin}
                setPin={setPin}
                pinLength={PIN_LENGTH}
                validationResult={hasError}
                isValidating={isValidating}
                size={`${pinInputProps?.size || 'small'}`}
                variant='outlined'
                onPinChanged={onPinChanged}
            />
            <button
                onClick={() => {
                    handleValidation()
                }}>
                Validate
            </button>
        </>
    )
}

export default Mock
