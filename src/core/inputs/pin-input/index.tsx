import React, { useEffect, useRef } from 'react'
import type {
    ChangeEvent,
    ClipboardEvent,
    CSSProperties,
    KeyboardEvent
} from 'react'
import MuiTextField from '@mui/material/TextField'
import { Container } from './styles'

export interface PinInputGridProps {
    pin: Array<number | undefined>
    setPin: (pin: Array<number | undefined>) => void
    onPinChanged: (pinEntry: number | undefined, index: number) => void
    pinLength: number
    validationResult: boolean | undefined
    isValidating: boolean
    size: 'small' | 'large'
    style?: CSSProperties
    inputProps?: CSSProperties
    variant?: 'outlined' | 'standard'
}

const BACKSPACE_KEY = 'Backspace'

const PinInput = ({
    pinLength,
    pin,
    setPin,
    onPinChanged,
    validationResult,
    isValidating,
    size,
    style: styleProps,
    inputProps,
    variant,
    ...otherProps
}: PinInputGridProps) => {
    const inputRefs = useRef<(HTMLInputElement | null)[]>([])

    const changePinFocus = (pinIndex: number) => {
        const ref = inputRefs.current[pinIndex]

        if (ref) {
            ref.focus()
        }
    }

    useEffect(() => {
        changePinFocus(0)
    }, [isValidating])

    const onPaste = (event: ClipboardEvent<HTMLInputElement>) => {
        const pastedValue = event.clipboardData.getData('text/plain')
        const splitValues = pastedValue.trim().split('')
        const intValues: number[] = []

        for (const value of splitValues) {
            intValues.push(parseInt(value, 10))
        }
        setPin(intValues)
        changePinFocus(intValues.length - 1)
    }

    const onChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        index: number
    ) => {
        const valuesArray = event.target.value.split('')
        const value = valuesArray.pop()

        if (event.target.value.length > 1) {
            return
        }

        if (!value || value === ' ' || value === '') {
            return
        }

        const pinNumber = Number(value.trim())

        if (isNaN(pinNumber) || value.length === 0) {
            return
        }

        onPinChanged(pinNumber, index)

        if (index < pinLength - 1) {
            changePinFocus(index + 1)
        }
    }

    const onKeyDown = (event: KeyboardEvent<HTMLDivElement>, index: number) => {
        const keyboardKeyCode = event.nativeEvent.code

        if (keyboardKeyCode !== BACKSPACE_KEY) {
            return
        }

        if (pin[index] === undefined) {
            changePinFocus(index - 1)
        } else {
            onPinChanged(undefined, index)
        }
    }

    return (
        <Container {...otherProps}>
            {Array.from({ length: pinLength }, (_, index) => (
                <MuiTextField
                    key={index}
                    color='primary'
                    disabled={isValidating}
                    error={validationResult}
                    className='pin-input-field'
                    variant={variant || 'outlined'}
                    value={pin[index] === 0 ? 0 : pin[index] || ''}
                    style={{
                        width: size === 'small' ? '40px' : '40px',
                        height: size === 'small' ? '30px' : '40px',
                        marginInline: size === 'small' ? '5px' : '10px',
                        ...styleProps
                    }}
                    slotProps={{
                        input: {
                            role: 'pin-input-field',
                            style: {
                                fontWeight: 'bold',
                                textAlign: 'center',
                                width: size === 'small' ? '40px' : '45px',
                                fontSize: size === 'small' ? '16px' : '20px',
                                padding: 'auto',
                                ...inputProps
                            }
                        }
                    }}
                    inputRef={(el: HTMLInputElement) => {
                        inputRefs.current[index] = el
                    }}
                    onPaste={onPaste}
                    onKeyDown={event => onKeyDown(event, index)}
                    onChange={event => {
                        onChange(event, index)
                    }}
                />
            ))}
        </Container>
    )
}

export default PinInput
