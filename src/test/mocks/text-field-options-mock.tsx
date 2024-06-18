import React, { useState } from 'react'
import type { ChangeEvent } from 'react'
import type { IOption, ITextFieldProps } from '@/core/inputs/text-field'
import TextField from '@/core/inputs/text-field'

interface IProps {
    initialOption?: string
    inputProps?: ITextFieldProps
    options?: IOption[] | string
}

const Default = ({ inputProps, initialOption, options }: IProps) => {
    const [value, setValue] = useState(initialOption ? initialOption : '')

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const handleClear = () => {
        setValue('')
    }

    return (
        <TextField
            value={value}
            onChange={handleChange}
            onClear={handleClear}
            {...inputProps}
            options={options}
        />
    )
}

export default Default
