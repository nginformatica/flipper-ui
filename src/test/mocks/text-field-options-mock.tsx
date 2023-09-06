import TextField, { IOption, TextFieldProps } from '@/core/inputs/text-field'
import * as React from 'react'

interface IProps {
    initialOption?: string
    inputProps?: TextFieldProps
    options?: IOption[] | string
}

const Default = ({ inputProps, initialOption, options }: IProps) => {
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
            {...inputProps}
            options={options}
        />
    )
}

export default Default
