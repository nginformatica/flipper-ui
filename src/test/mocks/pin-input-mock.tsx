import React, { useState } from 'react'
import PinInput, { PinInputGridProps } from '../../core/PinInput'
import { Button } from '@material-ui/core'
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
                onPinChanged={onPinChanged}
                pinLength={PIN_LENGTH}
                validationResult={hasError}
                isValidating={isValidating}
                size={`${pinInputProps?.size || 'small'}`}
                variant='outlined'
            />
            <Button
                onClick={() => {
                    handleValidation()
                }}>
                Validate
            </Button>
        </>
    )
}

export default Mock
