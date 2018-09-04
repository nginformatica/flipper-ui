import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup as MuiRadioGroup
} from '@material-ui/core'
import React, { ChangeEvent } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    title?: string
    name: string
    value?: string
    options?: Array<{ value: string, label?: string }>
    onChange?: (event: ChangeEvent<HTMLElement>) => void
}

const RadioGroup: React.SFC<IProps> = ({
    options = [],
    className,
    padding,
    margin,
    style = {},
    title,
    value,
    onChange
}) =>
    <FormControl
        className={ className }
        style={ { padding, margin, ...style } }>
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
