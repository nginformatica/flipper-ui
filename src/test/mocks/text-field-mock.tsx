import ListItem from '@/core/data-display/ListItem'
import TextField, { TextFieldProps } from '@/core/inputs/TextField'
import * as React from 'react'

interface IProps {
    initialOption?: string
    inputProps?: TextFieldProps
}

const LIST = [
    { label: null, value: '' },
    { label: 'Elm', value: 'elm' },
    { label: 'ReasonML', value: 'reasonml' },
    { label: 'Purescript', value: 'purescript' },
    { label: 'Fable', value: 'fable' }
]

const Default = ({ inputProps, initialOption }: IProps) => {
    const [value, setValue] = React.useState(initialOption ? initialOption : '')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
            {...inputProps}>
            {inputProps?.select
                ? LIST.map(({ label, value }) => (
                      <ListItem key={value} value={value}>
                          {label}
                      </ListItem>
                  ))
                : undefined}
        </TextField>
    )
}

export default Default
