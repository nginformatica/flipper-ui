import React, { useEffect, useRef } from 'react'
import { TextField } from '@material-ui/core'
import styled from 'styled-components'

interface PinInputGridProps {
    pin: Array<number | undefined>
    setPin: (pin: Array<number | undefined>) => void
    onPinChanged: (pinEntry: number | undefined, index: number) => void
    pinLength: number
    validationResult: boolean | undefined
    isValidating: boolean
    size: 'small' | 'large'
    style?: React.CSSProperties
    inputProps?: React.CSSProperties
    variant?: 'outlined' | 'standard'
}

const Container = styled.div`
    display: flex;
    width: auto;
    justify-content: center;
`

const removeValuesFromArray = (valuesArray: string[], value: string) => {
    const valueIndex = valuesArray.findIndex(entry => entry === value)
    if (valueIndex === -1) {
        return
    }
    valuesArray.splice(valueIndex, 1)
}

const PIN_MIN_VALUE = 0
const PIN_MAX_VALUE = 9
const BACKSPACE_KEY = 'Backspace'

const PinInput: React.FC<PinInputGridProps> = ({
    pinLength,
    pin,
    setPin,
    onPinChanged,
    validationResult,
    isValidating,
    size,
    style: styleProps,
    inputProps,
    variant
}) => {
    const inputRefs = useRef<HTMLInputElement[]>([])

    const changePinFocus = (pinIndex: number) => {
        const ref = inputRefs.current[pinIndex]
        if (ref) {
            ref.focus()
        }
    }

    useEffect(() => {
        changePinFocus(0)
    }, [isValidating])

    const onPaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
        const pastedValue = event.clipboardData.getData('text/plain')
        const splitValues = pastedValue.split('')
        const intValues: number[] = []
        for (const value of splitValues) {
            intValues.push(parseInt(value))
        }
        setPin(intValues)
        changePinFocus(intValues.length - 1)
    }

    const onChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        index: number
    ) => {
        if (event.target.value.length > 1) {
            return
        }
        const previousValue = event.target.defaultValue
        const valuesArray = event.target.value.split('')
        removeValuesFromArray(valuesArray, previousValue)
        const value = valuesArray.pop()
        if (!value || value === ' ' || value === '') {
            return
        }
        const pinNumber = Number(value.trim())
        if (isNaN(pinNumber) || value.length === 0) {
            return
        }

        if (pinNumber >= PIN_MIN_VALUE && pinNumber <= PIN_MAX_VALUE) {
            onPinChanged(pinNumber, index)
            if (index < pinLength - 1) {
                changePinFocus(index + 1)
            }
        }
    }

    const onKeyDown = (
        event: React.KeyboardEvent<HTMLDivElement>,
        index: number
    ) => {
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

    const useStyleProps = (): React.CSSProperties => {
        const style = {
            width: size === 'small' ? '40px' : '40px',
            height: size === 'small' ? '30px' : '40px',
            marginInline: size === 'small' ? '5px' : '10px',
            ...styleProps
        } as React.CSSProperties

        return style
    }

    const useInputProps = (): React.CSSProperties => {
        const style = {
            width: size === 'small' ? '40px' : '45px',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: size === 'small' ? '16px' : '20px',
            padding: 'auto',
            ...inputProps
        } as React.CSSProperties

        return style
    }

    return (
        <>
            <Container>
                { Array.from({ length: pinLength }, (_, index) => (
                    <TextField
                        disabled={ isValidating }
                        variant={ variant || 'outlined' }
                        onKeyDown={ event => onKeyDown(event, index) }
                        onPaste={ onPaste }
                        color='primary'
                        error={ validationResult }
                        style={ useStyleProps() }
                        InputProps={ {
                            style: useInputProps()
                        } }
                        inputRef={ (el: HTMLInputElement) => {
                            inputRefs.current[index] = el
                        } }
                        key={ index }
                        onChange={ event => {
                            onChange(event, index)
                        } }
                        value={ pin[index] === 0 ? 0 : pin[index] || '' }
                    />
                )) }
            </Container>
        </>
    )
}

export default PinInput
