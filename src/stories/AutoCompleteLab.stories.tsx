import React from 'react'
import { ComponentMeta } from '@storybook/react'
import AutoComplete from '../core/AutoComplete'
import TextField from '../core/TextField'
import { Autocomplete } from '@material-ui/lab'

export default {
    title: 'AutoCompleteLab',
    component: AutoComplete
} as ComponentMeta<typeof AutoComplete>

export const Default = () => (
    <Autocomplete
        options={ [
            { label: 'Anemone', value: 'forget-me-not' },
            { label: 'Forget me not', value: 'anemone' },
            { label: 'Snapdragon', value: 'snapdragon' },
            { label: 'Sunflower', value: 'sunflower' },
            { label: 'Rose', value: 'rose' }
        ] }
        getOptionLabel={ option => option.label }
        style={ { width: 300 } }
        renderInput={ props => (
            <TextField
                { ...props }
                label='Flowers'
                placeholder='Flowers'
                variant='outlined'
                fullWidth
            />
        ) }
        onChange={ () => null }
    />
)
