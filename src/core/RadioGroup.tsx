import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup as MuiRadioGroup
} from '@material-ui/core'
import React, { ChangeEvent, FC, ReactNode } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    row?: boolean
    title?: ReactNode
    name: string
    value?: string
    spacing?: 'default' | 'equal'
    options?: Array<{ value: string, label?: ReactNode }>
    onChange?: (event: ChangeEvent<HTMLElement>) => void
}

const RadioGroup: FC<IProps> = ({
    row,
    options = [],
    className,
    padding,
    margin,
    style = {},
    title,
    value,
    spacing,
    name,
    onChange,
    ...otherProps
}) =>
    <FormControl
        fullWidth
        className={ className }
        style={ { padding, margin, ...style } }
        { ...otherProps }>
        <FormLabel component='legend'>{ title }</FormLabel>
        <MuiRadioGroup
            row={ row }
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
                        style={ spacing === 'equal' ? { flex: 1 } : {} }
                    />
                )
            }
        </MuiRadioGroup>
    </FormControl>

export default RadioGroup
