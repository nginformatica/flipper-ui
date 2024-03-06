import * as React from 'react'
import type { TextFieldProps } from '@/core/inputs/text-field'
import ListItem from '@/core/data-display/list-item'
import TextField from '@/core/inputs/text-field'

interface IProps {
    initialOption?: string
    inputProps?: TextFieldProps
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
    const [value, setValue] = React.useState(initialOption ? initialOption : '')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
                          <ListItem key={value} value={value}>
                              {label}
                          </ListItem>
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
