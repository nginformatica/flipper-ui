import React, { useState } from 'react'
import type { ChangeEvent } from 'react'
import MuiMenuItem from '@mui/material/MenuItem'
import type { ITextFieldProps } from '@/core/inputs/text-field'
import TextField from '@/core/inputs/text-field'

interface IProps {
    initialOption?: string
    inputProps?: ITextFieldProps
    characters?: boolean
}

const LIST = [
    { label: null, value: '' },
    { label: 'Elm', value: 'elm' },
    { label: 'ReasonML', value: 'reasonml' },
    { label: 'Purescript', value: 'purescript' },
    { label: 'Fable', value: 'fable' }
]

const Default = ({ inputProps, initialOption, characters }: IProps) => {
    const [value, setValue] = useState(initialOption ? initialOption : '')

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const handleClear = () => {
        setValue('')
    }

    return (
        <>
            <TextField
                value={value}
                characters={characters}
                onChange={handleChange}
                onClear={handleClear}
                {...inputProps}>
                {inputProps?.select
                    ? LIST.map(({ label, value }) => (
                          <MuiMenuItem key={value} value={value}>
                              {label}
                          </MuiMenuItem>
                      ))
                    : undefined}
            </TextField>
            {characters && (
                <span data-testid='characters-counter'>
                    {value.toString().length}/
                    {inputProps?.inputProps?.maxLength}
                </span>
            )}
        </>
    )
}

export default Default
