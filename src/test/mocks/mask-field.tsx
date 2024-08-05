import React, { useState } from 'react'
import MaskField from '@/core/inputs/mask-field'

export const MaskFieldWrapper = () => {
    const [value, setValue] = useState<string>('1234567,89')

    const handleChange = (value: string) => {
        setValue(value)
    }

    return (
        <MaskField
            fixedDecimalScale
            value={value}
            decimalScale={2}
            decimalSeparator=','
            thousandSeparator='.'
            placeholder='Description'
            onValueChange={values => handleChange(values.value)}
        />
    )
}
