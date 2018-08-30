import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup as MuiRadioGroup
} from '@material-ui/core'
import React from 'react'

interface IProps {
    title?: string
    name: string
    value?: string
    options?: Array<{ value: string, label?: string }>
    style?: object
    onChange?: (event) => void
}

const RadioGroup = ({ options = [], style = {}, title, value, onChange }: IProps) =>
    <FormControl style={ style }>
        <FormLabel component='legend'>{ title }</FormLabel>
        <MuiRadioGroup
            name={ name }
            value={ value }
            onChange={ onChange }>
            {
                options.map(option =>
                    <FormControlLabel
                        key={ option.value }
                        label={ option.label }
                        value={ option.value }
                        control={ <Radio /> }
                    />
                )
            }
        </MuiRadioGroup>
    </FormControl>

export default RadioGroup
